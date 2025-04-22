import React from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ContactForm() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "b0a9b506-e54c-4922-b827-80a33db9c02a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form submitted successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Stack on small screens, side-by-side on larger screens
                mt: 4,
                mb: 4,
                p: 4,
                borderRadius: 4,
                gap: 4,
                alignItems: "flex-start",
                justifyContent: "space-between",
                width: "100%",
                backgroundColor: "whitesmoke",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            {/* Text Section */}
            <Box
                sx={{
                    flex: 1,
                    textAlign: "left",
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                    Contact Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Interested in collaborating on a project, or exploring our services? <br />
                    Please reach out and let's start the conversation. <br />
                    (647) 860-5702
                </Typography>
            </Box>

            {/* Form Section */}
            <Box
                component="form"
                onSubmit={onSubmit}
                sx={{
                    flex: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    borderRadius: 2,
                }}
            >
                <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    sx={{ backgroundColor: "white" }}
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    required
                    fullWidth
                    sx={{ backgroundColor: "white" }}
                />
                <TextField
                    label="Message"
                    name="message"
                    variant="outlined"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ backgroundColor: "white" }}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    sx={{ width: "150px", alignSelf: "center", backgroundColor: "lightslategray", color: "white", "&:hover": { backgroundColor: "black" } }}
                >
                    Submit
                </Button>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                    {result}
                </Typography>
            </Box>
        </Box>
    );
}

export default ContactForm;