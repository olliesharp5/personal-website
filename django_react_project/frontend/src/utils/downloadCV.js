const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/path/to/your/cv.pdf'; // Replace with the actual path
    link.download = 'OliverSharp_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  export default downloadCV;