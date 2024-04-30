function headerToggle() {
    const menuBtn = document.querySelector('.sidebar-main .mobile_menu');
    const cancelBtn = document.querySelector('.sidebar-main .cancel_icon');
    const leftbar = document.querySelector('.left_bar');

    if (menuBtn && leftbar) {
        menuBtn.addEventListener("click", function() {
            menuBtn.classList.toggle('is-active');
            leftbar.classList.toggle('show');
            // leftbar.classList.remove('hide');
        });
    }
    if (cancelBtn && leftbar) {
        cancelBtn.addEventListener("click", function() {
            // leftbar.classList.toggle('hide');
            leftbar.classList.remove('show');
        });
    }
}
headerToggle();


$(document).ready(function() {
    $('#dash-table').DataTable({
        dom: '<"top">rt<"bottom"pl><"clear">',
        "lengthMenu": [ [2, 4, 8, -1], [2, 4, 12, "All"] ],
        sort: false,
    });
});