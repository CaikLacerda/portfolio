export const downloadResume = () => {
  const url = import.meta.env.BASE_URL + 'Caik_Lacerda_Resume.pdf';
  window.open(url, '_blank', 'noopener')
}