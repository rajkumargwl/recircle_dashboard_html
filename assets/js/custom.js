// mobile menu
function headerToggle() {
    const menuBtn = document.querySelector('.sidebar-main .mobile_menu');
    const cancelBtn = document.querySelector('.sidebar-main .cancel_icon');
    const leftbar = document.querySelector('.left_bar');

    if (menuBtn && leftbar) {
        menuBtn.addEventListener("click", function () {
            menuBtn.classList.toggle('is-active');
            leftbar.classList.toggle('show');
        });
    }
    if (cancelBtn && leftbar) {
        cancelBtn.addEventListener("click", function () {
            leftbar.classList.remove('show');
        });
    }
}
headerToggle();

// data table
function format() {
    // `d` is the original data object for the row
    return (
        '<dl>' +
        '<div class="accoridan_section"><h2 class="section_heading">Disassembly Detail</h2>' +
        '<dd> <ul class="row accordian_list"><li class="col-md-3"><p class="light_font">Manpower</p><p class="dark_font">02</p></li><li class="col-md-3"><p class="light_font">Hours Worked</p><p class="dark_font">20</p></li><li class="col-md-3"><p class="light_font">Total Time</p><p class="dark_font">40 Hours</p></li><li class="col-md-3"><p class="light_font">Weight Difference</p><p class="dark_font">02</p></li></ul>' +
        '</dd>' +
        '<dt><div class="data_table"><table><thead><tr class="table table-striped dataTable"><th><span>Material</span></th><th><span>Sub Category</span></th><th><span>Weight (lbs)</span></th></tr></thead><tbody><tr><td><span class="dark_font">Cotton</span></td><td><span class="light_font">Grade 1</span></td><td><span class="light_font">40</span></td></tr><tr><td><span class="dark_font">Plastic</span></td><td><span class="light_font">LDPE</span></td><td><span class="light_font">3</span></td></tr></tbody></table></div></div></dt>' +
        '<dd>' +
        '</dd>' +
        // '<dt>Extra info:</dt>' +
        // '<dd>And any further details here (images etc)...</dd>' +
        '</dl>'
    );
}
$(document).ready(function () {
    
    $('#dash-table').DataTable({
        dom: '<"top">rt<"bottom"pl><"clear">',
        "lengthMenu": [[2, 4, 8, -1], [2, 4, 12, "All"]],
        sort: false,
        
    });
});

$(document).ready(function () {
    
    $('#dashTable').DataTable({
        dom: '<"top">rt<"bottom"pl><"clear">',
        "lengthMenu": [[2, 4, 8, -1], [2, 4, 12, "All"]],
        sort: false,
        
    });
    let table = new DataTable('#dashTable', {
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: ''
            },
            { data: 'name' },
            { data: 'position' },
            { data: 'office' },
            { data: 'salary' }
        ],
        order: [[1, 'asc']]
    });
    table.on('click', 'td.dt-control', function (e) {
        let tr = e.target.closest('tr');
        let row = table.row(tr);
        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            
        }
        else {
            // Open this row
            row.child(format()).show();
        }
    });
    
});





// slider
$(document).ready(function () {
    $('.slider').slick({
        autoplay: false,
        slidesToShow: 1,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true
    });
});


// tabs
function tabsSteps() {
    const menuBtn = document.querySelectorAll('.tabs_section .shipment_items .primary-btn');
    // const topBar = document.querySelector('.tabs_section');
    // const leftbar = document.querySelectorAll('.tabs_section .shipment_items');
    menuBtn.forEach((toggle) => {
        toggle.addEventListener('click', function(event) {
        
            const shipmentElement = toggle.closest('.tabs_section .shipment_items');
            const topBar = toggle.querySelector('.tabs_section');
            if (shipmentElement) {
                // Toggle the 'open' class on the .shipment element as well
                shipmentElement.classList.toggle('show');
            }
            if (topBar) {
                // Toggle the 'open' class on the .shipment element as well
                topBar.classList.toggle('active-in');
            }
        });
    });
    // if (menuBtn && leftbar) {
    //     menuBtn.addEventListener("click", function () {
    //         topBar.classList.toggle('is-active');
    //         leftbar.classList.toggle('show');
    //     });
    // }
}
tabsSteps();




// // Select all elements with the class .menu__child-toggle
// const childToggles = document.querySelectorAll('.menu__child-toggle');

// // Iterate over each child toggle element
// childToggles.forEach(function(toggle) {
//     // Add click event listener to each toggle
//     toggle.addEventListener('click', function(event) {
//         // Toggle the 'open' class on the parent element
//         toggle.parentElement.classList.toggle('open');
//     });
// });
