// JavaScript để chuyển đổi giữa các trang
function showHomePage() {
    // Ẩn tất cả các trang
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('thoi-su-page').style.display = 'none';
    document.getElementById('kinh-te-page').style.display = 'none';
    document.getElementById('the-thao-page').style.display = 'none';
    document.getElementById('giai-tri-page').style.display = 'none';
    document.getElementById('cong-nghe-page').style.display = 'none';
}

function showCategoryPage(category) {
    // Ẩn tất cả các trang
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('thoi-su-page').style.display = 'none';
    document.getElementById('kinh-te-page').style.display = 'none';
    document.getElementById('the-thao-page').style.display = 'none';
    document.getElementById('giai-tri-page').style.display = 'none';
    document.getElementById('cong-nghe-page').style.display = 'none';
    
    // Hiển thị trang được chọn
    document.getElementById(category + '-page').style.display = 'block';
}

// Khởi tạo trang chủ khi tải
document.addEventListener('DOMContentLoaded', function() {
    showHomePage();
    
    // Cập nhật ngày hiện tại
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('vi-VN', options);
    
    // Cập nhật ngày cho các bài viết mới
    const newsDates = document.querySelectorAll('.news-meta, .featured-meta, .trending-meta');
    newsDates.forEach(dateElement => {
        if (dateElement.textContent.includes('15/10/2023')) {
            dateElement.textContent = dateElement.textContent.replace('15/10/2023', formattedDate);
        }
    });
    
    // Thêm hiệu ứng khi cuộn trang
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });
});