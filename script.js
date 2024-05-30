function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function hideProjects() {
    var x = document.getElementById("operatie-infiltratie");
    if (x.style.display === "none")
        {
            x.style.display = "block";
            location.href='./#operatie-infiltratie';
        }
    else
    {
        x.style.display = "none";
    }
}

function hideProjects2() {
    var x = document.getElementById("wombs-way-out");
    if (x.style.display === "none")
        {
            x.style.display = "block";
            location.href='./#wombs-way-out';
        }
    else
    {
        x.style.display = "none";
    }
}

function hideProjects3() {
    var x = document.getElementById("star-shipper");
    if (x.style.display === "none")
        {
            x.style.display = "block";
            location.href='./#star-shipper';
        }
    else
    {
        x.style.display = "none";
    }
}

function hideProjects4() {
    var x = document.getElementById("physics-projects");
    if (x.style.display === "none")
        {
            x.style.display = "block";
            location.href='./#physics-projects';
        }
    else
    {
        x.style.display = "none";
    }
}
