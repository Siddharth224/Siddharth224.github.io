function openModal(projectId) {
    document.getElementById('modalTitle').innerText = 'Project Title ' + projectId;
    document.getElementById('modalDescription').innerText = 'Detailed description of Project ' + projectId + ' goes here. You can include technical details, images, and more to showcase your work.';
    document.getElementById('modalImg1').src = 'https://via.placeholder.com/600x300?text=Project+' + projectId + '+Image+1';
    document.getElementById('modalImg2').src = 'https://via.placeholder.com/600x300?text=Project+' + projectId + '+Image+2';
    document.getElementById('modalImg3').src = 'https://via.placeholder.com/600x300?text=Project+' + projectId + '+Image+3';
    document.getElementById('projectModal').style.display = 'flex';
}

function closeModal(event) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
        document.getElementById('projectModal').style.display = 'none';
    }
}
