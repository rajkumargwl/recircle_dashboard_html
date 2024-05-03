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


