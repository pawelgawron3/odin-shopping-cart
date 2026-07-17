import { Mail, Phone, MapPin } from "lucide-react";

const specialistData = {
  title: "Ask a Velora Specialist",

  description:
    "Need help choosing the perfect frame? Our eyewear specialists are here to guide you.",

  contacts: [
    {
      id: 0,
      type: "email",
      icon: Mail,
      value: "support@velora.com",
    },
    {
      id: 1,
      type: "phone",
      icon: Phone,
      value: "+48 123 456 789",
    },
    {
      id: 2,
      type: "location",
      icon: MapPin,
      value: "Warsaw, Poland",
    },
  ],

  hours: "Monday - Friday, 9:00 - 17:00",
};

export default specialistData;
