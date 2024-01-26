



let boxWidth = $('#box').outerWidth();
$('#sidenav').animate({ left: `-${boxWidth}px` }, 0)

$('#closeBtn').on('click', function () {
    let boxWidth = $('#box').outerWidth();
    $('#sidenav').animate({ left: `-${boxWidth}px` }, 1500)
});
$('#showBtn').on('click', function () {
    let boxWidth = $('#box').outerWidth();
    $('#sidenav').animate({ left: 0 }, 1500)
});

$('#sliderDown h3').on('click', function () {
    $(this).next().slideToggle("slow")
})

const targetDate = new Date('2024-02-01T00:00:00').getTime();
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    let temp = `<div class="col-md-3">
                <div class="tim">
                    <span>${days}D</span>
                </div>
                </div>
                <div class="col-md-3">
                    <div class="tim">
                        <span>${hours}h</span>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="tim">
                        <span>${minutes}m</span>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="tim">
                        <span>${seconds}s</span>
                    </div>
                </div>`;
    $('#countdown').html(temp);
}

$('#chars').prev().on('input',()=>{
    let count = $('#chars').prev().val().length;
    if(count < 99 )
        $('#chars').html(100 - count)
    else
        $('#chars').html('your available character finished')
})


