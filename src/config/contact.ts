export const CONTACT = {
  name: "Darko Dekan",
  phoneDisplay: "+381 62 100 5941",
  phoneHref: "+381621005941",
  email: "darko.dekan@gmail.com",
};

export function getWhatsAppURL(message: string) {
  const phone = CONTACT.phoneHref.replace(/\D/g, "");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getEmailURL(subject: string) {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;
}