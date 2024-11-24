const districtMap = {
    "Telangana": [
        "Adilabad", "Bhadradri Kothagudem", "Hanumakonda", "Hyderabad", "Jagtial",
        "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy",
        "Karimnagar", "Khammam", "Kumuram Bheem Asifabad", "Mahabubabad",
        "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu",
        "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad",
        "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet",
        "Suryapet", "Vikarabad", "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri"
    ],
    "Andhra Pradesh": [
    "Alluri Sitharama Raju", "Anakapalli", "Anantapur", "Bapatla",
    "Chittoor", "Dr. B. R. Ambedkar Konaseema", "East Godavari", "Eluru",
    "Guntur", "Kakinada", "Krishna", "Kurnool", "Nandyal", "NTR",
    "Palnadu", "Parvathipuram Manyam", "Prakasam", "Sri Potti Sriramulu Nellore",
    "Sri Sathya Sai", "Srikakulam", "Tirupati", "Visakhapatnam", "Vizianagaram",
    "West Godavari", "YSR Kadapa"
    ],
    "Karnataka": [
        "Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban",
        "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga",
        "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan",
        "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya",
        "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi",
        "Uttara Kannada", "Vijayapura", "Yadgir"
    ],
    "Kerala": [
        "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam",
        "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta",
        "Thiruvananthapuram", "Thrissur", "Wayanad"
    ],
    "Tamil Nadu": [
        "Ariyalur", "Chengalpattu", "Chennai", "Cuddalore",
        "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram",
        "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam",
        "Namakkal", "Nilgiris", "Pudukkottai", "Ramanathapuram",
        "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni",
        "Thiruvallur", "Thoothukudi", "Tiruchirappalli",
        "Tirunelveli", "Tirupathur", "Tiruppur", "Vellore",
        "Viluppuram", "Virudhunagar"
    ]
};

// Populates districts based on the selected state
function populateDistricts() {
    const stateSelect = document.getElementById("stateSelect").value;
    const districtSelect = document.getElementById("districtSelect");

    // Clear previous districts
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (stateSelect) {
        districtSelect.disabled = false;

        // Populate district dropdown for selected state
        districtMap[stateSelect].forEach(function(district) {
            const option = document.createElement("option");
            option.value = district;
            option.text = district;
            districtSelect.appendChild(option);
        });
    } else {
        districtSelect.disabled = true;
    }
}

// Navigates to a district-specific page when a district is selected
function navigateToLocation() {
    const district = document.getElementById("districtSelect").value;
    if (district) {
        const formattedDistrict = district.toLowerCase().replace(/\s+/g, '_');
        window.location.href = `district/${formattedDistrict}.html`; // Include the folder path
    } else {
        alert('Please select a district.');
    }
}
