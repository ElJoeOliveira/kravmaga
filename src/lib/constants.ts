export const CONTACT_INFO = {
  WHATSAPP_NUMBER: "5531985765400",
  WHATSAPP_MESSAGE: "Olá! Quero agendar minha aula cortesia de Krav Magá em Ipatinga.",
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${encodeURIComponent(CONTACT_INFO.WHATSAPP_MESSAGE)}`;
