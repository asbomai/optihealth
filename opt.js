let posts = [

{ 
        title: "Chronic Fatigue Syndrome (CFS)", 
        doctor: "Dr. Miller", 
        symptoms: "Severe fatigue, memory issues, difficulty concentrating", 
        signs: "Sore throat, swollen lymph nodes, muscle aches", 
        content: "CFS is a complex condition characterized by extreme fatigue that doesn't improve with rest." 
    },
    { 
        title: "Parkinson's Plus Syndrome", 
        doctor: "Dr. Harris", 
        symptoms: "Tremors, stiffness, difficulty swallowing", 
        signs: "Speech difficulties, impaired balance, slow movements", 
        content: "A group of neurological disorders that share symptoms with Parkinson's disease but progress differently." 
    },
    { 
        title: "Celiac Disease", 
        doctor: "Dr. Patel", 
        symptoms: "Chronic diarrhea, weight loss, fatigue", 
        signs: "Bloating, malnutrition, itchy rash", 
        content: "Celiac disease is an autoimmune condition triggered by gluten, leading to intestinal damage." 
    },
    { 
        title: "Fibrodysplasia Ossificans Progressiva (FOP)", 
        doctor: "Dr. Jameson", 
        symptoms: "Progressive stiffness, immobility, pain during movement", 
        signs: "Bone formation in muscles, deformed toes, joint fusions", 
        content: "A rare genetic condition where muscle tissue transforms into bone, causing severe immobility." 
    },
    { 
        title: "Stiff-Person Syndrome", 
        doctor: "Dr. Carter", 
        symptoms: "Muscle stiffness, painful spasms, difficulty walking", 
        signs: "Postural deformities, heightened sensitivity to touch or sound, rigid posture", 
        content: "A rare neurological disorder causing progressive muscle stiffness and spasms." 
    },
    { 
        title: "Primary Lateral Sclerosis (PLS)", 
        doctor: "Dr. Wright", 
        symptoms: "Weakness in legs, difficulty with speech, slow movements", 
        signs: "Spasticity, exaggerated reflexes, difficulty maintaining posture", 
        content: "PLS is a rare motor neuron disease affecting voluntary muscle control." 
    },
    { 
        title: "Kidney Disease (Chronic Kidney Disease)", 
        doctor: "Dr. Simmons", 
        symptoms: "Fatigue, swelling in legs, difficulty concentrating", 
        signs: "High blood pressure, reduced urination, swelling in ankles", 
        content: "Chronic kidney disease is a condition where the kidneys slowly lose function over time." 
    },
    { 
        title: "Type 2 Diabetes (Sugar Diabetes)", 
        doctor: "Dr. Thomas", 
        symptoms: "Increased thirst, frequent urination, fatigue", 
        signs: "High blood sugar, slow healing sores, blurry vision", 
        content: "Type 2 diabetes is a chronic condition that affects the way the body processes blood sugar." 
    },
    { 
        title: "Breast Cancer", 
        doctor: "Dr. Thompson", 
        symptoms: "Lumps in breast, changes in breast appearance, pain", 
        signs: "Changes in skin texture, unusual discharge, swelling", 
        content: "Breast cancer is a type of cancer that starts in the cells of the breast." 
    },

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
        title: "Hypertension (High Blood Pressure)", 
        doctor: "Dr. Davis", 
        symptoms: "Headaches, shortness of breath, nosebleeds", 
        signs: "Elevated blood pressure, dizziness, chest pain", 
        content: "Hypertension is a condition where the blood pressure in the arteries is persistently elevated." 
    },
    { 
        title: "Lung Cancer", 
        doctor: "Dr. Martin", 
        symptoms: "Persistent cough, coughing up blood, chest pain", 
        signs: "Wheezing, shortness of breath, fatigue", 
        content: "Lung cancer is a type of cancer that begins in the lungs, typically caused by smoking." 
    },
    // Additional Diseases
    { 
        title: "Alport Syndrome", 
        doctor: "Dr. Hayes", 
        symptoms: "Blood in urine, hearing loss, vision issues", 
        signs: "Protein in urine, kidney failure, eye abnormalities", 
        content: "A genetic disorder affecting kidneys, ears, and eyes." 
    },
    { 
        title: "Duchenne Muscular Dystrophy", 
        doctor: "Dr. Clarke", 
        symptoms: "Frequent falls, difficulty standing, muscle weakness", 
        signs: "Enlarged calves, walking on toes, respiratory issues", 
        content: "A genetic disorder characterized by progressive muscle degeneration and weakness." 
    },
    { 
        title: "Multiple Sclerosis (MS)", 
        doctor: "Dr. Rogers", 
        symptoms: "Numbness, tingling, vision problems", 
        signs: "Muscle weakness, fatigue, speech difficulty", 
        content: "A disease where the immune system attacks the protective sheath covering nerves." 
    },
    { 
        title: "Amyloidosis", 
        doctor: "Dr. Walker", 
        symptoms: "Shortness of breath, swelling, weight loss", 
        signs: "Enlarged tongue, irregular heartbeat, fatigue", 
        content: "A rare disease caused by the build-up of abnormal proteins in organs." 
    },
    { 
        title: "Crohn's Disease", 
        doctor: "Dr. Watson", 
        symptoms: "Abdominal pain, diarrhea, fatigue", 
        signs: "Weight loss, malnutrition, fever", 
        content: "A chronic inflammatory bowel disease affecting the gastrointestinal tract." 
    },
    { 
        title: "Huntington's Disease", 
        doctor: "Dr. Young", 
        symptoms: "Involuntary movements, depression, memory loss", 
        signs: "Muscle rigidity, impaired coordination, cognitive decline", 
        content: "A genetic disorder causing the progressive breakdown of nerve cells in the brain." 
    },
    { 
        title: "Marfan Syndrome", 
        doctor: "Dr. Evans", 
        symptoms: "Tall stature, long arms, back pain", 
        signs: "Flexible joints, curved spine, heart murmurs", 
        content: "A genetic disorder that affects connective tissue." 
    },
    { 
        title: "Behcet's Disease", 
        doctor: "Dr. Bennett", 
        symptoms: "Mouth sores, joint pain, skin rashes", 
        signs: "Eye inflammation, genital sores, swollen joints", 
        content: "A rare disorder causing blood vessel inflammation." 
    },
    { 
        title: "Wilson's Disease", 
        doctor: "Dr. Price", 
        symptoms: "Fatigue, abdominal pain, uncontrolled movements", 
        signs: "Yellowing of the skin, copper rings around eyes, liver damage", 
        content: "A genetic disorder in which excess copper builds up in the body." 
    },
    { 
        title: "Takayasu's Arteritis", 
        doctor: "Dr. Hughes", 
        symptoms: "Fatigue, weight loss, dizziness", 
        signs: "Weak pulse, high blood pressure, limb pain", 
        content: "A rare disease that inflames the large blood vessels." 
    },
    { 
        title: "Porphyria", 
        doctor: "Dr. Scott", 
        symptoms: "Abdominal pain, muscle weakness, nausea", 
        signs: "Blisters on skin, dark urine, light sensitivity", 
        content: "A group of disorders affecting the skin or nervous system due to porphyrin build-up." 
    },

]


// Pagination Variables
let currentPage = 1;
const postsPerPage = 3; // Number of posts to display per page

// Function to display posts with pagination
function displayPosts(filteredPosts = null) {
    const resultsDiv = document.getElementById("postResults");
    resultsDiv.innerHTML = "";

    const postsToDisplay = filteredPosts || posts;

    if (postsToDisplay.length === 0) {
        resultsDiv.innerHTML = "<p>No posts found.</p>";
        return;
    }

    // Calculate pagination
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = postsToDisplay.slice(startIndex, endIndex);

    // Display the posts for the current page
    postsToShow.forEach((post) => {
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

    // Update the visibility of Next/Previous buttons
    updatePaginationButtons(postsToDisplay.length);
}

// Update the Next/Previous buttons visibility
function updatePaginationButtons(totalPosts) {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    // Disable Previous button if we're at the first page
    prevButton.disabled = currentPage === 1;

    // Disable Next button if there are no more posts to show
    nextButton.disabled = currentPage * postsPerPage >= totalPosts;
}

// Navigate between pages
function navigatePosts(direction) {
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next') {
        currentPage++;
    }
    // Re-display the posts based on the new page
    displayPosts();
}

// Initial display of posts when the page loads
displayPosts();

// Search functionality
function searchPosts() {
    const searchInput = document.getElementById("postSearch").value.toLowerCase().trim();
    const resultsDiv = document.getElementById("postResults");
    resultsDiv.innerHTML = "";

    if (!searchInput) {
        displayPosts(posts); // Show all posts if search input is empty
        return;
    }

    // Split the user's input into individual words
    const searchWords = searchInput.split(/\s+/); // Split by spaces
    const matchingPosts = [];

    // Iterate through each post
    posts.forEach((post) => {
        // Combine signs and symptoms into a single searchable text
        const combinedText = `${post.signs.toLowerCase()} ${post.symptoms.toLowerCase()}`;
        let matchCount = 0;

        // Check how many search words match in the combined text
        searchWords.forEach((word) => {
            if (combinedText.includes(word)) {
                matchCount++;
            }
        });

        // Add post to results if at least 2 words match
        if (matchCount >= 2) {
            matchingPosts.push(post);
        }
    });

    // Display matching posts or show "No posts found"
    displayPosts(matchingPosts);
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
    alert(`You can now send a message to Dr. ${doctor}.`);
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Initial display of posts
displayPosts();
