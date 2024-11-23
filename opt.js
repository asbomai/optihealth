let posts = [
    { 
        title: "Ehlers-Danlos Syndrome (EDS)", 
        doctor: "Dr. Peterson", 
        symptoms: "Joint hypermobility, frequent dislocations, chronic pain", 
        signs: "Elastic skin, easy bruising, poor wound healing", 
        content: "EDS is a group of connective tissue disorders characterized by defects in collagen production." 
    },
    { 
        title: "Meniere's Disease", 
        doctor: "Dr. Lopez", 
        symptoms: "Vertigo, tinnitus, hearing loss", 
        signs: "Fullness in the ear, balance issues, headaches", 
        content: "Meniere's disease is an inner ear disorder that affects hearing and balance." 
    },
    { 
        title: "Guillain-Barre Syndrome (GBS)", 
        doctor: "Dr. Reed", 
        symptoms: "Tingling in hands or feet, difficulty walking, muscle weakness", 
        signs: "Absent reflexes, rapid heart rate, trouble breathing", 
        content: "GBS is a rare neurological disorder where the body's immune system attacks the peripheral nerves." 
    },
    { 
        title: "Systemic Lupus Erythematosus (Lupus)", 
        doctor: "Dr. Ahmed", 
        symptoms: "Fatigue, joint pain, fever", 
        signs: "Butterfly-shaped facial rash, photosensitivity, hair loss", 
        content: "Lupus is an autoimmune disease that can cause inflammation in multiple organ systems." 
    },
    { 
        title: "Chronic Fatigue Syndrome (CFS)", 
        doctor: "Dr. Miller", 
        symptoms: "Severe fatigue, memory issues, difficulty concentrating", 
        signs: "Sore throat, swollen lymph nodes, muscle aches", 
        content: "CFS is a complex condition characterized by extreme fatigue that doesn't improve with rest." 
    }
];

// Function to display posts
function displayPosts(filteredPosts = null) {
    const resultsDiv = document.getElementById("postResults");
    resultsDiv.innerHTML = "";

    const postsToDisplay = filteredPosts || posts;

    if (postsToDisplay.length === 0) {
        resultsDiv.innerHTML = "<p>No posts found.</p>";
        return;
    }

    postsToDisplay.forEach((post) => {
        const postHTML = `
            <div>
                <h3>${post.title}</h3>
                <p><strong>Doctor:</strong> ${post.doctor}</p>
                <p><strong>Symptoms:</strong> ${post.symptoms}</p>
                <p><strong>Signs:</strong> ${post.signs}</p>
                <p>${post.content}</p>
                <button onclick="contactDoctor('${post.doctor}')">Contact Doctor</button>
            </div>
        `;
        resultsDiv.innerHTML += postHTML;
    });
}

// Enhanced search function with keyword validation
function searchPosts() {
    const searchInput = document.getElementById("postSearch").value.toLowerCase().trim();
    const resultsDiv = document.getElementById("postResults");
    resultsDiv.innerHTML = "";

    if (!searchInput) {
        displayPosts(posts); // Show all posts if search input is empty
        return;
    }

    // Split the input into words and filter out single characters
    const searchKeywords = searchInput
        .split(/\s+/) // Split by spaces
        .filter(word => word.length > 1); // Remove single characters

    if (searchKeywords.length === 0) {
        resultsDiv.innerHTML = "<p>No valid keywords found. Please refine your search.</p>";
        return;
    }

    const postMatches = [];

    // Iterate through posts to calculate match counts
    posts.forEach((post) => {
        const combinedText = `${post.signs.toLowerCase()} ${post.symptoms.toLowerCase()}`;
        let matchCount = 0;

        searchKeywords.forEach((keyword) => {
            if (combinedText.includes(keyword)) {
                matchCount++;
            }
        });

        if (matchCount > 0) {
            postMatches.push({ post, matchCount });
        }
    });

    if (postMatches.length === 0) {
        resultsDiv.innerHTML = "<p>No matching posts found. Please refine your search.</p>";
        return;
    }

    // Determine the maximum match count
    const maxMatchCount = Math.max(...postMatches.map(match => match.matchCount));

    // Filter posts with the maximum match count
    const topMatches = postMatches.filter(match => match.matchCount === maxMatchCount)
                                  .map(match => match.post);

    // Display only the top matches
    displayPosts(topMatches);
}

// Handle creating a new post
document.getElementById("createPostForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("postTitle").value;
    const doctor = document.getElementById("postDoctor").value;
    const symptoms = document.getElementById("postSymptoms").value;
    const signs = document.getElementById("postSigns").value;
    const content = document.getElementById("postContent").value;

    posts.push({ title, doctor, symptoms, signs, content });
    alert("Post created successfully!");
    document.getElementById("createPostForm").reset();
    displayPosts();
});

// Function to contact doctor
function contactDoctor(doctor) {
    alert(`You can now send a message to ${doctor}.`);
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Initial display of posts
displayPosts();
