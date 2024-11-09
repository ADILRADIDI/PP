document.querySelectorAll('.btn-filter').forEach(button => {
    button.addEventListener('click', function () {
        // Remove the "active" class from all buttons
        document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
        
        // Add the "active" class to the clicked button
        this.classList.add('active');
        
        // Handle the content filtering logic here
        const filter = this.getAttribute('data-filter');
        console.log(`Filtering by: ${filter}`);
        // Implement your filtering logic based on the filter variable
    });
});
