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
        "lengthMenu": [[2, 4, 12, -1], [2, 4, 12, "All"]],
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
// function tabsSteps() {
//     const menuBtn = document.querySelectorAll('.tabs_section .shipment_items');
//     menuBtn.forEach((toggle) => {
//         toggle.addEventListener('click', function(event) {
        
//             const shipmentElement = toggle.closest('.tabs_section .shipment_items');
//             const topBar = toggle.closest('.tabs_section');
//             const number_bar = toggle.querySelector('.tabs_section .tabs_number li');
//             if (shipmentElement) {
//                 // Toggle the 'open' class on the .shipment element as well
//                 shipmentElement.classList.toggle('show');
//             }
//             if (topBar) {
//                 // Toggle the 'open' class on the .shipment element as well
//                 topBar.classList.toggle('active-in');
//             }
//             if (number_bar) {
//                 // Toggle the 'open' class on the .shipment element as well
//                 topBar.classList.toggle('active');
//             }
//         });
//     });
// }
// tabsSteps();

function tableAccordian() {
    const menuBtn = document.querySelectorAll('.dt-hasChild .add_plus .plus');
    menuBtn.forEach((toggle) => {
        toggle.addEventListener('click', function(event) {
            const shipmentElement = toggle.closest('.dt-hasChild');
            if (shipmentElement) {
                // Toggle the 'open' class on the .shipment element as well
                shipmentElement.classList.toggle('show');
            }
        });
    });
}
tableAccordian();


$( document ).ready(function() {
    $(".clean_completed").on('click', function(){
        $('.tabs_number li.clean_repair_step .number').hide();
        $('.tabs_number li.clean_repair_step .check').show();
        $('.tabs_number li.clean_repair_step').removeClass('active');
        $('.clean_repair_process').removeClass('show');

        $('.photography_process').addClass('show');
        $('.tabs_number li.photography_step').addClass('active');
        $('.tabs_number li.photography_step .number').show();
        $('.tabs_number li.photography_step .check').hide();
        $('.clean_repair_process .target_block').hide();
        $('.clean_repair_process .completed_boxes').show();
        $('.photography_process .target_block').css('display', 'flex');


    });

    $(".photo").on('click', function(){
        $('.tabs_number li.photography_step .number').hide();
        $('.tabs_number li.photography_step .check').show();
        $('.tabs_number li.photography_step').removeClass('active');
        $('.photography_process').removeClass('show');

        $('.upload_photo_process').addClass('show');
        $('.tabs_number li.upload_step').addClass('active');
        $('.tabs_number li.upload_step .number').show();
        $('.tabs_number li.upload_step .check').hide();
        $('.photography_process .target_block').hide();
        $('.photography_process .completed_boxes').show();
        $('.upload_photo_process .target_block').css('display', 'flex');
        $('.upload_photo_process .target_check').show();

    });
    $(".upload").on('click', function(){
        $('.tabs_number li.upload_step .number').hide();
        $('.tabs_number li.upload_step .check').show();
        $('.tabs_number li.upload_step').removeClass('active');
        $('.upload_photo_process').removeClass('show');

        $('.Warehouse_process').addClass('show');
        $('.tabs_number li.warehouse_step').addClass('active');
        $('.tabs_number li.warehouse_step .number').show();
        $('.tabs_number li.warehouse_step .check').hide();
        $('.upload_photo_process .target_check').hide();
        $('.upload_photo_process .target_block').hide();
        $('.upload_photo_process .completed_boxes.upload_check_boxes-flex').css('display', 'flex');
        $('.Warehouse_process .target_block').css('display', 'flex');

    });
    $(".warehouse").on('click', function(){
        $('.tabs_number li.warehouse_step .number').hide();
        $('.tabs_number li.warehouse_step .check').show();
        $('.tabs_number li.warehouse_step').removeClass('active');
        $('.Warehouse_process').removeClass('show');

        $('.pack_process').addClass('show');
        $('.tabs_number li.ship_step').addClass('active');
        $('.tabs_number li.ship_step .number').show();
        $('.tabs_number li.ship_step .check').hide();
        $('.Warehouse_process .target_check').hide();
        $('.Warehouse_process .target_block').hide();
        $('.Warehouse_process .completed_boxes').show();
        $('.pack_process .target_block').css('display', 'flex');

    });
    $(".pack").on('click', function(){
        $('.tabs_number li.ship_step .number').hide();
        $('.tabs_number li.ship_step .check').show();
        $('.tabs_number li.ship_step').removeClass('active');
        $('.pack_process').removeClass('show');

        $('.pack_process .target_block').hide();
        $('.pack_process .completed_boxes').show();

    });
});

// upload file code
function readUrl(input) {
  
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let imgData = e.target.result;
        let imgName = input.files[0].name;
        input.setAttribute("data-title", imgName);
        console.log(e.target.result);
         $('#preview').html('<img src="' + e.target.result + '" />')
      }
      reader.readAsDataURL(input.files[0]);
    }
  
  }