<template>
    <footer class="footer">
        <div class="footer_top">
            <h3 class="footer_title">Start saving on your travel budget</h3>
            <div class="footer_top_btns">
                <button class="footer_top_btn">Sign up</button>
                <button class="footer_top_btn">Demo</button>
            </div>
        </div>
        <div class="footer_content">
            <div class="footer_descr">
                <p class="footer_descr_adress">Address: HillTop travel agency,
                    <span>Angamly, Eranakulam,</span>
                    <span>Kerala, India.</span>
                </p>
                <p class="footer_descr_phone">Phn.no: <a href="tel:+91 9544444444"> +91
                        9544444444</a><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="tel:+91 9644444444">+91 9644444444</a>
                </p>
                <p class="footer_descr_email">Mail.id: <a href="mailto:hilltop@gmail.com">hilltop@gmail.com</a></p>
                <div class="footer_descr_links">
                    <a href="" class="footer_descr_link"><img src="../assets/Img/inst.png" alt=""></a>
                    <a href="" class="footer_descr_link"><img src="../assets/Img/face.png" alt=""></a>
                    <a href="" class="footer_descr_link"><img src="../assets/Img/twit.png" alt=""></a>
                    <a href="" class="footer_descr_link"><img src="../assets/Img/mail.png" alt=""></a>
                </div>
            </div>
            <form action="" class="footer_form">
                <h3 class="footer_form_title">Never miss a deal!</h3>
                <div class="footer_form_wrap">
                    <div class="footer_form_inner">
                    <label for="namefooter" class="footer_form_inner_label">Name</label>
                    <input id="namefooter" type="text" class="footer_form_inner_input" required>
                </div>
                <div class="footer_form_inner">
                    <label for="phonefooter" class="footer_form_inner_label">phone</label>
                    <input id="phonefooter" type="tel" class="footer_form_inner_input" required>
                </div>
                </div>  
                <div class="footer_form_wrapper">
                    <div class="footer_form_wi">
                        <label for="checkinfooter" class="footer_form_wi_label">Выберите дату</label>
                        <input id="checkinfooter" type="date" class="footer_form_inner_input" placeholder="03.01.2023" required>
                    </div>
                    <div class="footer_form_wi">
                        <label for="checkoutfooter" class="footer_form_wi_label">Выберите дату прилета</label>
                        <input id="checkoutfooter" type="date" class="footer_form_inner_input" placeholder="03.01.2023" required>
                    </div>
                    <div class="footer_form_wi">
                        <label for="peoplefooter" class="footer_form_wi_label">Количество человек</label>
                        <input id="peoplefooter" type="number" class="footer_form_inner_input"
                            placeholder="Количество человек" required min="1" value="1">
                    </div>
                </div>
                <div class="footer_form_inner">
                    <label for="thourfooter" class="footer_form_inner_label">Thour</label>
                    <input id="thourfooter" type="text" class="footer_form_inner_input">
                </div>
                <button class="footer_form_btn">
                    Submit
                </button>
                <button class="footer_form_btn">
                    Pay
                </button>
            </form>
        </div>
        <div class="footer_bottom">
            <p class="footer_bottom_p">All right reserved by HillTop</p>
            <a class="footer_bottom_a" href="">Privacy Policy</a>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>