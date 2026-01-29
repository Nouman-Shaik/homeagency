import Contact from "../models/contact.js";

export const createContact = async (req, res) => {
  try {
    const { fulname, email, phone, area } = req.body;

    const newContact = new Contact({
      fulname,
      email,
      phone,
      area,
    });

    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}; 