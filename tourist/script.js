const districtMap = {
    "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hanumakonda", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri"],
    "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Shimoga", "Udupi", "Chikmagalur", "Hampi", "Belgaum", "Bijapur"],
    "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Thanjavur", "Tiruchirappalli", "Tirunelveli", "Tiruvannamalai", "Vellore", "Viluppuram"]
};

function populateDistricts() {
    const stateSelect = document.getElementById("stateSelect").value;
    const districtSelect = document.getElementById("districtSelect");

    // Clear previous districts
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (stateSelect) {
        districtSelect.disabled = false;

        // Populate district dropdown
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

function navigateToLocation() {
    const state = document.getElementById("stateSelect").value;
    const district = document.getElementById("districtSelect").value;

    if (state && district) {
        const pageMap = {
            'Adilabad': 'adilabad.html',
            'Bhadradri Kothagudem': 'bhadradri.html',
            'Hanumakonda': 'hanumakonda.html',
            'Hyderabad': 'hyderabad.html',
            'Jagtial': 'jagtial.html',
            'Jangaon': 'jangaon.html',
            'Jayashankar Bhupalpally': 'jayashankar.html',
            'Jogulamba Gadwal': 'jogulamba.html',
            'Kamareddy': 'kamareddy.html',
            'Karimnagar': 'karimnagar.html',
            'Khammam': 'khammam.html',
            'Kumuram Bheem Asifabad': 'kumuram.html',
            'Mahabubabad': 'mahabubabad.html',
            'Mahabubnagar': 'mahabubnagar.html',
            'Mancherial': 'mancherial.html',
            'Medak': 'medak.html',
            'Medchal-Malkajgiri': 'medchal.html',
            'Mulugu': 'mulugu.html',
            'Nagarkurnool': 'nagarkurnool.html',
            'Nalgonda': 'nalgonda.html',
            'Narayanpet': 'narayanpet.html',
            'Nirmal': 'nirmal.html',
            'Nizamabad': 'nizamabad.html',
            'Peddapalli': 'peddapalli.html',
            'Rajanna Sircilla': 'rajanna.html',
            'Rangareddy': 'rangareddy.html',
            'Sangareddy': 'sangareddy.html',
            'Siddipet': 'siddipet.html',
            'Suryapet': 'suryapet.html',
            'Vikarabad': 'vikarabad.html',
            'Wanaparthy': 'wanaparthy.html',
            'Warangal': 'warangal.html',
            'Yadadri Bhuvanagiri': 'yadadri.html'
        };

        const destination = pageMap[district];
        if (destination) {
            window.location.href = destination;
        } else {
            alert('Page not found for the selected district.');
        }
    } else {
        alert('Please select both a state and a district.');
    }
}
