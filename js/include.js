

async function includeHTML() {
  const elementsToInclude = document.querySelectorAll('[headerContent], [footerContent]');
  
  for (const element of elementsToInclude) {
    try {
      const file = element.getAttribute('headerContent') || element.getAttribute('footerContent');
      const response = await fetch(file);
      
      if (!response.ok) {
        throw new Error('File not found.');
      }
      
      const content = await response.text();
      element.innerHTML = content;
      var carts = JSON.parse(window.localStorage.getItem('CARTS') ?? '[]');
      $('#cartItemCount').text(carts.length.toString());
      element.removeAttribute('headerContent');
      element.removeAttribute('footerContent');
    } catch (error) {
      element.innerHTML = `Error loading content: ${error.message}`;
    }
  }
}

includeHTML();

  
  // async function includeHTML() {
  //   const elementsToInclude = document.querySelectorAll('[footerContent]');
    
  //   for (const element of elementsToInclude) {
  //     try {
  //       const file = element.getAttribute('footerContent');
  //       const response = await fetch(file);
        
  //       if (!response.ok) {
  //         throw new Error('File not found.');
  //       }
        
  //       const content = await response.text();
  //       element.innerHTML = content;
  //       element.removeAttribute('footerContent');
  //     } catch (error) {
  //       element.innerHTML = `Error loading content: ${error.message}`;
  //     }
  //   }
  // }
  
  // includeHTML();