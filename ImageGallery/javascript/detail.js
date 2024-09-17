// Sample data for images, title, and descriptions
const imageDetails = {
    1: {
        title: "Image Title 1",
        description: "This is a description of Image 1.",
        src: "../images/image1.jpg"
    },
    2: {
        title: "Image Title 2",
        description: "This is a description of Image 2.",
        src: "../images/image2.jpg"
    },
    3: {
        title: "Image Title 3",
        description: "This is a description of Image 3.",
        src: "../images/image3.jpg"
    },
    4: {
        title: "Image Title 4",
        description: "This is a description of Image 4.",
        src: "../images/image4.jpg"
    },
    5: {
        title: "Image Title 5",
        description: "This is a description of Image 5.",
        src: "../images/image5.jpg"
    },
    6: {
        title: "Image Title 6",
        description: "This is a description of Image 6.",
        src: "../images/image6.jpg"
    },
    7: {
        title: "Image Title 7",
        description: "This is a description of Image 7.",
        src: "../images/image7.jpg"
    },
    8: {
        title: "Image Title 8",
        description: "This is a description of Image 8.",
        src: "../images/image8.jpg"
    },
    9: {
        title: "Image Title 9",
        description: "This is a description of Image 9.",
        src: "../images/image9.jpg"
    },
    // Add more entries for other images
};

function getImageDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const imageId = urlParams.get('id');
    return imageDetails[imageId];
}

function displayImageDetails() {
    const details = getImageDetails();
    if (details) {
        document.getElementById('detail-image').src = details.src;
        document.getElementById('image-title').textContent = details.title;
        document.getElementById('image-description').textContent = details.description;
    }
}

function goBack() {
    window.history.back();
}

window.onload = displayImageDetails;
