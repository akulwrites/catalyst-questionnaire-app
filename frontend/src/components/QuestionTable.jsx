import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography
} from "@mui/material";

export default function QuestionTable({ questions }) {
    const imageBaseURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
    return (
        <TableContainer component={Paper} sx={{ mt: 6 }}>
            <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: "bold", py: 2 }}
            >
            📋 Saved Questions
            </Typography>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>Section</TableCell>
                <TableCell>Subsection</TableCell>
                <TableCell>Question</TableCell>
                <TableCell>Multi?</TableCell>
                <TableCell>Options (Text / Marks / Image)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {questions.map((q, index) => (
                <TableRow key={index}>
                    <TableCell>{q.section}</TableCell>
                    <TableCell>{q.subsection}</TableCell>
                    <TableCell>{q.question}</TableCell>
                    <TableCell>{q.isMulti ? "Yes" : "No"}</TableCell>
                    <TableCell>
                    {q.options.map((opt, i) => (
                        <div key={i} style={{ marginBottom: "12px" }}>
                        <div>
                            <strong>{opt.text}</strong> / {opt.marks}
                        </div>
                        {opt.imageUrl && (
                            <img
                            src={`${imageBaseURL}${opt.imageUrl}`}
                            alt="Option"
                            style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginTop: "4px",
                                border: "1px solid #ccc"
                            }}
                            />
                        )}
                        </div>
                    ))}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}  