document.addEventListener('DOMContentLoaded', () => {
    const communities = ["Anime", "Vintage", "Fairy Tale", "Sci-Fi", "Nature", "Technology"];
    const communityButtonsContainer = document.getElementById('community-buttons');
    const errorMessage = document.getElementById('error-message');
    const submitButton = document.getElementById('submit-button');
  
    let selectedCommunities = [];
  
    const renderButtons = () => {
      communityButtonsContainer.innerHTML = '';
      communities.forEach((community, index) => {
        const button = document.createElement('button');
        button.textContent = community;
        button.addEventListener('click', () => handleCommunityChange(community, button));
        button.classList.toggle('selected', selectedCommunities.includes(community));
        communityButtonsContainer.appendChild(button);
      });
    };
  
    const handleCommunityChange = (community, button) => {
      if (selectedCommunities.includes(community)) {
        selectedCommunities = selectedCommunities.filter(c => c !== community);
      } else {
        selectedCommunities.push(community);
      }
      button.classList.toggle('selected');
    };
  
    const handleSubmit = () => {
      if (selectedCommunities.length === 0) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please select at least one community';
        return;
      }
      errorMessage.style.display = 'none';
      alert('Selected Communities: ' + selectedCommunities.join(', '));
    };
  
    submitButton.addEventListener('click', handleSubmit);
  
    renderButtons();
  });
  