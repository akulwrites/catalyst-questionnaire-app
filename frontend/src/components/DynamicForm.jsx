import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  IconButton, 
  Snackbar,
  Alert
} from "@mui/material";
import { fetchSectionsFromAPI } from "@/actions/sections";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DynamicForm({ onSubmit }) {
  const getInitialForm = () => ({
    section: "",
    subsection: "",
    question: "",
    isMulti: false,
    options: [
      {
        key: Date.now(), // unique key for input tracking
        text: "",
        marks: "",
        image: null,
        preview: null
      }
    ]
  });

  const [form, setForm] = useState(getInitialForm());
  const [sectionOptions, setSectionOptions] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  // ✅ Load sections (external function)
  const loadSections = async () => {
    try {
      const data = await fetchSectionsFromAPI();
      setSectionOptions(data);
    } catch (error) {
      console.error("Failed to load sections:", error);
    }
  };

  useEffect(() => {
    loadSections();
  }, []);

  // ✅ Add option with unique key
  const addOption = () =>
    setForm((prev) => ({
      ...prev,
      options: [
        ...prev.options,
        {
          key: Date.now(),
          text: "",
          marks: "",
          image: null,
          preview: null
        }
      ]
    }));

  const updateOption = (index, key, value) => {
    setForm((prevForm) => {
      const updatedOptions = [...prevForm.options];

      if (key === "image") {
        const file = value;

        // Revoke old preview
        const oldPreview = updatedOptions[index]?.preview;
        if (oldPreview) {
          URL.revokeObjectURL(oldPreview);
        }

        const previewUrl = file ? URL.createObjectURL(file) : null;

        updatedOptions[index] = {
          ...updatedOptions[index],
          image: file,
          preview: previewUrl
        };
      } else {
        updatedOptions[index] = {
          ...updatedOptions[index],
          [key]: value
        };
      }

      return {
        ...prevForm,
        options: updatedOptions
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);

    // ✅ Revoke preview URLs manually
    form.options.forEach((opt) => {
      if (opt.preview) {
        URL.revokeObjectURL(opt.preview);
      }
    });

    // ✅ Reset form with new key
    setForm(getInitialForm());
  };

  const removeImage = (index) => {
    setForm((prevForm) => {
      const updatedOptions = [...prevForm.options];
  
      if (updatedOptions[index].preview) {
        URL.revokeObjectURL(updatedOptions[index].preview);
      }
  
      updatedOptions[index] = {
        ...updatedOptions[index],
        image: null,
        preview: null
      };
  
      return {
        ...prevForm,
        options: updatedOptions
      };
    });
  };

  const removeOption = (index) => {
    if (form.options.length === 1) {
      setShowAlert(true);
      return;
    }
  
    const opt = form.options[index];
    if (opt.preview) {
      URL.revokeObjectURL(opt.preview);
    }
  
    setForm((prevForm) => ({
      ...prevForm,
      options: prevForm.options.filter((_, i) => i !== index)
    }));
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create a New Question
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            {/* Section Dropdown */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ minWidth: 220 }}>
                <InputLabel>Section</InputLabel>
                <Select
                  value={form.section}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      section: e.target.value,
                      subsection: ""
                    })
                  }
                  label="Section"
                >
                  {Object.keys(sectionOptions).map((section) => (
                    <MenuItem key={section} value={section}>
                      {section}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Subsection Dropdown */}
            {form.section && (
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth sx={{ minWidth: 220 }}>
                  <InputLabel>Subsection</InputLabel>
                  <Select
                    value={form.subsection}
                    onChange={(e) =>
                      setForm({ ...form, subsection: e.target.value })
                    }
                    label="Subsection"
                  >
                    {sectionOptions[form.section]?.map((sub) => (
                      <MenuItem key={sub} value={sub}>
                        {sub}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            )}

            {/* Question */}
            <Grid item xs={12}>
              <TextField
                label="Question"
                fullWidth
                multiline
                minRows={3}
                value={form.question}
                onChange={(e) =>
                  setForm({ ...form, question: e.target.value })
                }
              />
            </Grid>

            {/* Multi-Select Checkbox */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.isMulti}
                    onChange={(e) =>
                      setForm({ ...form, isMulti: e.target.checked })
                    }
                  />
                }
                label="Allow multiple correct answers"
              />
            </Grid>

            {/* Options */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Options
              </Typography>

              {form.options.map((opt, index) => (
                <Grid
                  container
                  spacing={2}
                  key={opt.key}
                  sx={{
                    backgroundColor: "#f9f9f9",
                    borderRadius: 2,
                    padding: 2,
                    marginBottom: 2,
                    position: "relative"
                  }}
                >
              
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="Option Text"
                      fullWidth
                      value={opt.text}
                      onChange={(e) => updateOption(index, "text", e.target.value)}
                    />
                  </Grid>
                
                  <Grid item xs={12} sm={3}>
                    <TextField
                      label="Marks"
                      type="number"
                      fullWidth
                      value={opt.marks}
                      onChange={(e) => updateOption(index, "marks", e.target.value)}
                    />
                  </Grid>
                
                  <Grid item xs={12} sm={5}>
                    <Button variant="outlined" component="label" fullWidth>
                      Upload Image
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => updateOption(index, "image", e.target.files[0])}
                      />
                    </Button>
                
                    {opt.image && (
                      <>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          mt={1}
                        >
                          <Typography variant="caption">{opt.image.name}</Typography>
                          <IconButton onClick={() => removeImage(index)} size="small">
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Box>
                        {opt.preview && (
                          <Box mt={1}>
                            <img
                              src={opt.preview}
                              alt="Preview"
                              style={{
                                maxWidth: "100%",
                                maxHeight: "120px",
                                borderRadius: "8px",
                                border: "1px solid #ddd"
                              }}
                            />
                          </Box>
                        )}
                      </>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                  >
                    <IconButton
                      onClick={() => removeOption(index)}
                      aria-label="delete option"
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}

              <Button variant="text" onClick={addOption}>
                ➕ Add More Option
              </Button>
            </Grid>

            {/* Submit */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                ✅ Save Question
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Snackbar
          open={showAlert}
          autoHideDuration={3000}
          onClose={() => setShowAlert(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={() => setShowAlert(false)} severity="warning" sx={{ width: "100%" }}>
            You must have at least one option.
          </Alert>
        </Snackbar>
      </Paper>
    </Container>
  );
}