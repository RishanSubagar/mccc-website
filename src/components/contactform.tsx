import React from "react";
import Box from "@mui/material/Box";
import Textarea from "@mui/joy/Textarea";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

function ContactForm() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b0a9b506-e54c-4922-b827-80a33db9c02a");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return (
        <Box 
            component={"form"} 
            onSubmit={onSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3, // Adds consistent spacing between form elements
                maxWidth: "100%", // Limits the form width
                mt: 4, // Adds top margin
                py: 2, // Adds vertical padding
                px: 4, // Adds horizontal padding
                boxShadow: 2, // Adds a subtle shadow
                backgroundColor: "white", // Sets a white background
            }}
        >
        <h2>Contact Us</h2>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
            <label htmlFor="name">Name:</label>
            <TextField id="name" label="Name" variant="outlined" required fullWidth />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
            <label htmlFor="email">Email:</label>
            <TextField id="email" label="Email" variant="outlined" required fullWidth />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
            <label htmlFor="message">Message:</label>
            <Textarea
                id="message"
                disabled={false}
                minRows={4}
                placeholder="Write us a message"
                size="lg"
                variant="outlined"
                required
                style={{ width: "100%" }}
            />
        </Box>
            <Button 
                type="submit"
                sx={{ width: "150px", alignSelf: "center" }}
            >
                Submit
            </Button>
        <span>{result}</span>
        </Box>
    );
}
export default ContactForm;