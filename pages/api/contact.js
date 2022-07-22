
export default async function handler(req, res) {
    if(req.method === 'POST') {
        const { email, name, message } = req.body
        if (!email || !email.includes('@') || !name || name.trim() == '') {
            res.status(422).json({ message: 'invalid'})
            return
        }

        const newMessage = {
            email,
            name,
            message
        }

        try {
            await fetch(process.env.apiUrl,{
                method: "POST",
                body: JSON.stringify(newMessage),
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            console.log(newMessage)
            res.status(201).json({message: 'success', message: newMessage})
        } catch (error) {
            res.status(500).json({ message: 'could not connect db'})
            return
        }
    }
    
}