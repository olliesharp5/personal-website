const downloadCV = () => {
  // Construct the URL using the public path
  const link = document.createElement('a');
  link.href = `${process.env.PUBLIC_URL}/cv.pdf`;
  link.download = 'OliverSharp_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloadCV;