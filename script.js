function volume_sphere() {
    //Write your code here
	const radius = document.getElementById('radius').value;

      // Calculate the volume of the sphere
      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

      // Update the volume input field with the result
      document.getElementById('volume').value = volume.toFixed(2);

      // Prevent form submission (since we handle the calculation here)
      return false;
    }
  
 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
