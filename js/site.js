
$(document).ready(function(){

    $element = {
        navbar: $("nav"),
        navElements: $(".nav-element"),
        devTitle: "Hi, I'm Mattia and I'm a software specialist",
        idxTitle: 0,
        activeSection: "",
        header: $("header"),
        navSkills: $("#navSkills"),
        navContacts: $("#navContacts"),
        skills: $("#skills"),
        contacts: $("#contacts"),
        frontEndH3: $("#frontEndTitle"),
        frontEndTitle: "Front-end",
        frontEndContainer: $("#frontEndContainer"),
        backEndH3: $("#backEndTitle"),
        backEndTitle: "Back-end",
        backEndContainer: $("#backEndContainer"),
        toolsH3: $("#toolsTitle"),
        toolsTitle: "Development Tools",
        toolsContainer: $("#toolsContainer"),
        linkedinContact: $("#linkedinContact"),
        businessEmailContact: $("#businessEmailContact"),
        personalEmailContact: $("#personalEmailContact")
    }

    function bindingSkills() {

        $element.frontEndH3.text($element.frontEndTitle);
        $element.backEndH3.text($element.backEndTitle);
        $element.toolsH3.text($element.toolsTitle);

        $($skills.frontEnd).each(function(index, element) {
            $element.frontEndContainer.append(
                `<div class="skill-container">
                    <div class="skill-img-container">
                        <img class="skill-img" src="img/${element.path}" alt="${element.title}">
                    </div>
                    <div class="skill-title">${element.title}</div>
                </div>`
            );
        });

        $($skills.backEnd).each(function(index, element) {
            $element.backEndContainer.append(
                `<div class="skill-container">
                    <div class="skill-img-container">
                        <img class="skill-img" src="img/${element.path}" alt="${element.title}">
                    </div>
                    <div class="skill-title">${element.title}</div>
                </div>`
            );
        });

        $($skills.tools).each(function(index, element) {
            $element.toolsContainer.append(
                `<div class="skill-container">
                    <div class="skill-img-container">
                        <img class="skill-img" src="img/${element.path}" alt="${element.title}">
                    </div>
                    <div class="skill-title">${element.title}</div>
                </div>`
            );
        });
    }

    function typingDevTitle() {
        if ($element.idxTitle < $element.devTitle.length) {
            document.getElementById("devTitle").innerHTML += $element.devTitle.charAt($element.idxTitle);
            $element.idxTitle++;
            setTimeout(typingDevTitle, 90);
        }
    }

    function bindingNavbar() {
        $element.navSkills.show().addClass("animate__zoomIn animate__delay-4s");
        $element.navContacts.show().addClass("animate__zoomIn animate__delay-5s");
    }

    function copyIconListner() {
        $(".contact-detail .fa-copy").on("click", function() {
            const email = $(this).siblings("a").text();
            const copied = $(this).parent().parent().find(".copied");
            console.log(copied);
            let $temp = $("<input>");
            $("body").append($temp);
            $temp.val(email).select();
            document.execCommand("copy");
            $temp.remove();
            $(copied).fadeIn();
            setTimeout(function() {
                $(copied).fadeOut();
            },2000);
        });
    }

    $element.navSkills.on("click", function(){

        if ($element.activeSection == ""){
            $element.header.fadeOut();
        } else if ($element.activeSection == "contacts"){
            $element.contacts.fadeOut();
            setTimeout(function(){
                $element.frontEndContainer.css({opacity:0});
                $element.backEndContainer.css({opacity:0});
                $element.toolsContainer.css({opacity:0});
            }, 1000);
        }
        
        $element.activeSection = "skills";
        
        setTimeout(function(){
            $element.skills.fadeIn();
        }, 1000);

        setTimeout(function(){
            $element.frontEndContainer.animate({opacity:1});
        }, 2000);

        setTimeout(function(){
            $element.backEndContainer.animate({opacity:1});
        }, 3000);

        setTimeout(function(){
            $element.toolsContainer.animate({opacity:1});
        }, 4000);
    });

    $element.navContacts.on("click", function(){

        if ($element.activeSection == ""){
            $element.header.fadeOut();
        } else if ($element.activeSection == "skills"){
            $element.skills.fadeOut();
            setTimeout(function(){
                $element.linkedinContact.css({opacity:0});
                $element.businessEmailContact.css({opacity:0});
                $element.personalEmailContact.css({opacity:0});
            }, 1000);
        }
        
        $element.activeSection = "contacts";
        
        setTimeout(function(){
            $element.contacts.fadeIn();
        }, 1000);

        setTimeout(function(){
            $element.linkedinContact.animate({opacity:1});
        }, 2000);

        setTimeout(function(){
            $element.businessEmailContact.animate({opacity:1});
        }, 3000);

        setTimeout(function(){
            $element.personalEmailContact.animate({opacity:1});
        }, 4000);
    });

    bindingSkills();
    typingDevTitle();
    bindingNavbar();
    copyIconListner();
});