let posts = [
    { 
        title: "Chronic Fatigue Syndrome (CFS)", 
        doctor: "Dr. Miller", 
        symptoms: "Severe fatigue, memory issues, difficulty concentrating", 
        signs: "Sore throat, swollen lymph nodes, muscle aches", 
        content: "CFS is a complex condition characterized by extreme fatigue that doesn't improve with rest." 
    },
    { 
        title: "Lyme Disease", 
        doctor: "Dr. Sanders", 
        symptoms: "Fever, chills, fatigue, body aches", 
        signs: "Bulls-eye rash, joint swelling", 
        content: "Caused by Borrelia bacteria transmitted through tick bites, it is rare in Nigeria due to its geographic distribution." 
    },
    { 
        title: "Cystic Fibrosis", 
        doctor: "Dr. Harper", 
        symptoms: "Persistent cough, shortness of breath, salty-tasting skin", 
        signs: "Frequent lung infections, poor growth", 
        content: "This genetic condition affects the lungs and digestive system, typically found in populations of European descent." 
    },
    { 
        title: "Kawasaki Disease", 
        doctor: "Dr. Lopez", 
        symptoms: "Fever, red eyes, rash, swollen glands", 
        signs: "Strawberry tongue, peeling skin", 
        content: "A rare inflammatory condition affecting children, often linked to genetic and environmental factors." 
    },
    { 
        title: "Crohn's Disease", 
        doctor: "Dr. Brown", 
        symptoms: "Abdominal pain, diarrhea, weight loss", 
        signs: "Inflammation of the digestive tract", 
        content: "An inflammatory bowel disease affecting the gastrointestinal tract, uncommon in Nigeria." 
    },
    { 
        title: "Multiple Sclerosis (MS)", 
        doctor: "Dr. Johnson", 
        symptoms: "Vision problems, fatigue, numbness", 
        signs: "Muscle weakness, impaired coordination", 
        content: "MS is an autoimmune disease affecting the central nervous system, with low prevalence in Africa." 
    },
    { 
        title: "Huntington's Disease", 
        doctor: "Dr. Baker", 
        symptoms: "Mood changes, memory loss, involuntary movements", 
        signs: "Muscle rigidity, coordination issues", 
        content: "A genetic neurodegenerative disorder affecting movement and cognitive function." 
    },
    { 
        title: "Amyotrophic Lateral Sclerosis (ALS)", 
        doctor: "Dr. Green", 
        symptoms: "Weakness, muscle twitching, difficulty speaking", 
        signs: "Paralysis, respiratory failure", 
        content: "ALS is a progressive neurological disorder that damages nerve cells, rare in tropical regions." 
    },
    { 
        title: "Sarcoidosis", 
        doctor: "Dr. Patel", 
        symptoms: "Dry cough, chest pain, fatigue", 
        signs: "Enlarged lymph nodes, skin lesions", 
        content: "An inflammatory disease that causes granulomas to form in the lungs and other organs." 
    },
    { 
        title: "Creutzfeldt-Jakob Disease (CJD)", 
        doctor: "Dr. Kim", 
        symptoms: "Rapid dementia, hallucinations, muscle stiffness", 
        signs: "Spastic movements, loss of coordination", 
        content: "A rare, fatal brain disorder caused by prion proteins." 
    },
    { 
        title: "Primary Biliary Cholangitis", 
        doctor: "Dr. Allen", 
        symptoms: "Fatigue, itchy skin, jaundice", 
        signs: "Enlarged liver, dark urine", 
        content: "A chronic liver disease caused by immune system damage to bile ducts." 
    },
    { 
        title: "Gaucher's Disease", 
        doctor: "Dr. Davis", 
        symptoms: "Bone pain, fatigue, easy bruising", 
        signs: "Enlarged spleen, liver, and bone abnormalities", 
        content: "A rare genetic condition resulting in fatty substance buildup in certain organs." 
    },
    { 
        title: "Marfan Syndrome", 
        doctor: "Dr. Adams", 
        symptoms: "Tall stature, long fingers, heart murmurs", 
        signs: "Aortic enlargement, vision problems", 
        content: "A genetic disorder affecting connective tissue, mainly seen in populations outside sub-Saharan Africa." 
    },
    { 
        title: "Behçet's Disease", 
        doctor: "Dr. Ross", 
        symptoms: "Mouth sores, eye inflammation, joint pain", 
        signs: "Skin lesions, genital ulcers", 
        content: "A rare inflammatory condition more common in the Mediterranean and East Asia." 
    },
    { 
        title: "Ehlers-Danlos Syndrome", 
        doctor: "Dr. Evans", 
        symptoms: "Joint hypermobility, fragile skin, chronic pain", 
        signs: "Excessive bruising, delayed wound healing", 
        content: "A group of genetic disorders affecting connective tissue, uncommon in African populations." 
    },
    { 
        title: "Goodpasture Syndrome", 
        doctor: "Dr. Moore", 
        symptoms: "Coughing blood, fatigue, swelling", 
        signs: "Kidney damage, lung bleeding", 
        content: "A rare autoimmune disease that attacks the lungs and kidneys." 
    },
    { 
        title: "Tay-Sachs Disease", 
        doctor: "Dr. White", 
        symptoms: "Weak muscles, delayed development, seizures", 
        signs: "Cherry-red spot in the eye, vision loss", 
        content: "A genetic disorder primarily affecting Ashkenazi Jewish populations." 
    },
    { 
        title: "Alport Syndrome", 
        doctor: "Dr. Gray", 
        symptoms: "Blood in urine, hearing loss, swelling", 
        signs: "Kidney damage, eye abnormalities", 
        content: "A genetic condition affecting the kidneys, eyes, and ears." 
    },
    { 
        title: "Sjogren's Syndrome", 
        doctor: "Dr. Hill", 
        symptoms: "Dry eyes, dry mouth, joint pain", 
        signs: "Swollen salivary glands, rashes", 
        content: "An autoimmune disorder affecting moisture-producing glands, uncommon in tropical climates." 
    },
    { 
        title: "Wilson's Disease", 
        doctor: "Dr. Thomas", 
        symptoms: "Fatigue, jaundice, tremors", 
        signs: "Copper rings in eyes, liver damage", 
        content: "A rare genetic condition causing copper buildup in the body." 
    },
    { 
        title: "Lassa Fever", 
        doctor: "Dr. Obinna", 
        symptoms: "Fever, vomiting, muscle aches", 
        signs: "Bleeding gums, facial swelling, low blood pressure", 
        content: "A viral hemorrhagic illness caused by Lassa virus, transmitted through contact with infected rodents or their droppings." 
    },
    { 
        title: "Sickle Cell Disease (SCD)", 
        doctor: "Dr. Adebayo", 
        symptoms: "Severe pain episodes, fatigue, shortness of breath", 
        signs: "Jaundice, delayed growth, frequent infections", 
        content: "A genetic blood disorder common in Nigeria, characterized by abnormally shaped red blood cells that block blood flow." 
    },
    { 
        title: "Tuberculosis (TB)", 
        doctor: "Dr. Yusuf", 
        symptoms: "Persistent cough, weight loss, night sweats", 
        signs: "Lung scarring, swollen lymph nodes, fatigue", 
        content: "A bacterial infection that mainly affects the lungs and can mimic other conditions like pneumonia." 
    },
    { 
        title: "Hepatitis E", 
        doctor: "Dr. Emeka", 
        symptoms: "Fever, jaundice, dark urine", 
        signs: "Enlarged liver, abdominal pain, nausea", 
        content: "A liver infection spread through contaminated water or food, particularly during outbreaks in rural regions." 
    },
    { 
        title: "Buruli Ulcer", 
        doctor: "Dr. Aisha", 
        symptoms: "Painless swelling, skin lesions, fever", 
        signs: "Large ulcers, tissue destruction, scarring", 
        content: "A bacterial skin infection caused by *Mycobacterium ulcerans*, often misdiagnosed as other tropical skin conditions." 
    },
    { 
        title: "Onchocerciasis (River Blindness)", 
        doctor: "Dr. Chukwu", 
        symptoms: "Itching, skin rashes, visual impairment", 
        signs: "Skin depigmentation, blindness, nodules under the skin", 
        content: "A parasitic disease caused by a filarial worm transmitted through blackfly bites." 
    },
    { 
        title: "Schistosomiasis (Bilharzia)", 
        doctor: "Dr. Ikenna", 
        symptoms: "Blood in urine, abdominal pain, fever", 
        signs: "Bladder inflammation, liver damage, malnutrition", 
        content: "A waterborne parasitic infection caused by schistosome worms, prevalent in freshwater areas." 
    },
    { 
        title: "Leptospirosis", 
        doctor: "Dr. Ifeanyi", 
        symptoms: "Fever, headache, muscle pain", 
        signs: "Jaundice, kidney failure, meningitis", 
        content: "A bacterial infection transmitted through contaminated water or soil, often mistaken for malaria or typhoid." 
    },
    { 
        title: "Neonatal Tetanus", 
        doctor: "Dr. Folake", 
        symptoms: "Muscle stiffness, inability to feed, irritability", 
        signs: "Locked jaw, spasms, rigid posture", 
        content: "A preventable condition caused by *Clostridium tetani* bacteria, often linked to unhygienic birthing practices." 
    },
    { 
        title: "Typhoid Fever", 
        doctor: "Dr. Oladipo", 
        symptoms: "Fever, abdominal pain, diarrhea", 
        signs: "Enlarged spleen, rose spots on skin, dehydration", 
        content: "A bacterial infection caused by *Salmonella Typhi*, often difficult to distinguish from malaria in early stages." 
    },
    { 
        title: "Visceral Leishmaniasis (Kala Azar)", 
        doctor: "Dr. Adewale", 
        symptoms: "Fever, weight loss, night sweats", 
        signs: "Enlarged spleen, darkening skin, anemia", 
        content: "A parasitic disease caused by *Leishmania* parasites, transmitted by sandflies, and often confused with TB or HIV." 
    },
    { 
        title: "Chronic Typhoid Carriers", 
        doctor: "Dr. Chika", 
        symptoms: "Intermittent fever, fatigue, abdominal pain", 
        signs: "Gallbladder inflammation, liver swelling", 
        content: "Asymptomatic carriers of typhoid bacteria who may develop chronic conditions or infect others." 
    },
    { 
        title: "Brucellosis", 
        doctor: "Dr. Kemi", 
        symptoms: "Fever, muscle pain, sweating", 
        signs: "Joint inflammation, enlarged spleen, weight loss", 
        content: "A bacterial infection transmitted through unpasteurized dairy or infected animals, challenging to diagnose due to non-specific symptoms." 
    },
    { 
        title: "Trypanosomiasis (Sleeping Sickness)", 
        doctor: "Dr. Nnamdi", 
        symptoms: "Fatigue, confusion, swollen lymph nodes", 
        signs: "Sleep disturbances, weight loss, nervous system damage", 
        content: "A parasitic disease caused by *Trypanosoma* species, transmitted by tsetse flies." 
    },
    { 
        title: "Cryptococcal Meningitis", 
        doctor: "Dr. Salisu", 
        symptoms: "Headache, neck stiffness, confusion", 
        signs: "Seizures, fever, blurred vision", 
        content: "A fungal infection of the brain, commonly seen in HIV/AIDS patients, often misdiagnosed as bacterial meningitis." 
    },
    { 
        title: "Severe Malaria (Cerebral Malaria)", 
        doctor: "Dr. Musa", 
        symptoms: "High fever, convulsions, confusion", 
        signs: "Anemia, respiratory distress, coma", 
        content: "A life-threatening form of malaria caused by *Plasmodium falciparum*, common but often misdiagnosed as other fevers." 
    },
    { 
        title: "Rift Valley Fever", 
        doctor: "Dr. Balogun", 
        symptoms: "Fever, muscle pain, joint pain", 
        signs: "Bleeding gums, eye inflammation, liver damage", 
        content: "A viral disease transmitted by mosquitoes, rare but occurs during livestock outbreaks." 
    },
    { 
        title: "Yaws", 
        doctor: "Dr. Tijani", 
        symptoms: "Painless skin lesions, joint pain, fatigue", 
        signs: "Bone deformities, skin ulcers, swelling", 
        content: "A bacterial skin disease caused by *Treponema pallidum*, often confused with leprosy or syphilis." 
    },
    { 
        title: "Monkeypox", 
        doctor: "Dr. Akinlade", 
        symptoms: "Fever, rash, muscle aches", 
        signs: "Swollen lymph nodes, pustular lesions", 
        content: "A viral zoonotic disease characterized by pox-like lesions, emerging as an outbreak in some Nigerian regions." 
    },
    { 
        title: "Tropical Sprue", 
        doctor: "Dr. Olufemi", 
        symptoms: "Diarrhea, weight loss, fatigue", 
        signs: "Nutritional deficiencies, intestinal damage", 
        content: "A rare malabsorption condition affecting travelers and residents in tropical regions, often mistaken for celiac disease." 
    }
];










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
    displayPosts();
}

// Initial display of posts
displayPosts();

// Refined Search Functionality
function searchPosts() {
    const searchInput = document.getElementById("postSearch").value.toLowerCase().trim();
    const resultsDiv = document.getElementById("postResults");
    resultsDiv.innerHTML = "";

    if (!searchInput) {
        displayPosts(posts); // Show all posts if search input is empty
        return;
    }

    // Split the user's input into individual words, filter out single characters
    const searchWords = searchInput.split(/\s+/).filter(word => word.length > 1);
    const matchingPosts = [];

    // Iterate through each post to find matches
    posts.forEach((post) => {
        const combinedText = `${post.signs.toLowerCase()} ${post.symptoms.toLowerCase()}`;
        let matchCount = 0;

        // Count how many search words match the combined text
        searchWords.forEach((word) => {
            if (combinedText.includes(word)) {
                matchCount++;
            }
        });

        // Only add posts with at least 2 matching words
        if (matchCount >= 2) {
            matchingPosts.push({ post, matchCount });
        }
    });

    // Sort matching posts by match count in descending order
    matchingPosts.sort((a, b) => b.matchCount - a.matchCount);

    // Extract posts for display
    const postsToDisplay = matchingPosts.map(match => match.post);

    // Display matching posts or show "No posts found"
    if (postsToDisplay.length > 0) {
        displayPosts(postsToDisplay);
    } else {
        resultsDiv.innerHTML = "<p>No matching posts found. Please refine your search.</p>";
    }
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
