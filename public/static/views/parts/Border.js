/**
 * Created by pacman29 on 22.02.17.
 */
(function () {
    window.Border = function Border(img){
        let container = document.createElement('div');
        container.setAttribute('class','container border');
        container.innerHTML = `
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-6">
                    <div id="inside_block" >
                        
                    </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-3">
                    <div class="row">
                        <img src="${img.toString()}" class="img-responsive">
                    </div>
                </div>
             </div>
            `;
        return container;
    }
}());
/*
 <div class="container my_btn_image">
    <div class="row">
        <div class="col-lg-2">

        </div>
        <div class="col-lg-6">
            <div id="singin_form" >
                <div class="js-login" hidden="hidden"></div>
                <div class="js-chat" hidden="hidden"></div>
                <div class="js-reg" hidden="hidden"></div>
                <script src="form2.js"></script>
                <script src="form1.js"></script>
            </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-3">
            <div class="row"><img src="../images/add_your_data.png" alt="Placeholder image" class="img-responsive my_img_sing_in"></div>
        </div>
    </div>
 </div>
 */
