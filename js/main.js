(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);



//Event Make Appointment - Enable form validation
document.addEventListener("DOMContentLoaded", function () {
     console.log("DOM Content Loaded");
    (function () {
        'use strict';

        var form = document.getElementById('appointmentForm');
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault(); // Prevent form submission
                // Display success message
                showAlert("Appointment successfully made!", "success");
            }
            
            form.classList.add('was-validated');
        });

        // Function to show an alert message
        function showAlert(message, type) {
            var alertDiv = document.createElement("div");
            alertDiv.className = `alert alert-${type} mt-4`;
            alertDiv.textContent = message;
            document.querySelector(".appointment-form").appendChild(alertDiv);
            
            // Automatically hide the alert after 3 seconds
            setTimeout(function () {
                alertDiv.remove();
            }, 3000);
        }
    })();
});
var productDetail = [
    // ------lotion------//
    {
        name: 'Cetaphil', price: 15, oldPrice: 20, about: `
    <li>CETAPHIL BODY MOISTURIZING LOTION FOR ALL SKIN TYPES: Lightweight, fast absorbing, non-greasy
        body lotion that's ideal for use on the entire body</li>
    <li>INSTANTLY SOOTHES AND PROVIDES 48 HOUR HYDRATION: Immediately boosts skin hydration and
        continues to strengthen skin moisture barrier throughout the day</li>
    <li>NEW AND IMPROVED INGREDIENT BLEND: Now with hydrating glycerin and skin essential vitamins B5
        (panthenol) and B3 (niacinamide)</li>
    <li>DEVELOPED FOR EVEN THE MOST SENSITIVE SKIN: The hypoallergenic, non-comedogenic formula is free
        of fragrances, parabens and sulfates</li>
    <li>DERMATOLOGIST RECOMMENDED for Sensitive Skin</li>`,
        description: `Find skin care that works for you with CETAPHIL Moisturizing Lotion, a lightweight and
fast absorbing moisturizer designed to comfort and hydrate all skin types. The unique formulation of
skin essential vitamin E and 6 moisturizing ingredients provides instant lightweight hydration that
leaves skin soft and smooth. And now formulated with a new blend of key ingredients: hydrating
glycerin, panthenol (vitamin B5) to hydrate, soothe and preserve the skin barrier, and niacinamide
(vitamin B3) to help smooth skin texture and retain skin moisture barrier. Water binding agents
deeply replenish the skins moisture and prevent moisture loss, providing long lasting 48 hour
hydration that completely restores the skins moisture barrier in one week, helping to defend against
5 signs of skin sensitivity. Fragrance free, lanolin free, paraben free and sulfate free, this
gentle lotion is clinically tested for even the most sensitive skin. Treat your skin right thanks to
the gentle, non-comedogenic formula, providing instant, everyday moisturizing care that leaves skin
immediately feeling soft, smooth and replenished.`,
        details: `
<li>Is Discontinued By Manufacturer : No</li>
<li>Product Dimensions : 2.25 x 4.5 x 9.5 inches; 0.09 Ounces</li>
<li>Item model number : I00108841</li>
<li>UPC : 381371182183</li>
<li>Manufacturer : Johnson & Johnson</li>
<li>ASIN : B07GC86X9X</li>
<li>Country of Origin : USA</li>`,
        preview: `<p>Cetaphil Body Moisturizer, Hydrating Moisturizing Lotion for All Skin Types,
Suitable for Sensitive Skin, NEW 20 oz, Fragrance Free, Hypoallergenic,
Non-Comedogenic </p>`,
        ingredients: `<span style="font-weight: bold;"> Niacinamide, Vitamin E </span>`,
        container: `lotion`
    },
    {
        name: 'Aveeno', price: 18, oldPrice: 21, about: `
    <li>33-fluid ounces of Aveeno Stress Relief Moisturizing Body Lotion with lavender scent relaxes you
        while providing your skin with 24 hours of intense moisture. The unique formula includes
        oatmeal, an ingredient known for its skin-soothing properties</li>
    <li>Features the calming scent of lavender to help calm and relax you as you massage lotion into
        skin. This non-greasy moisturizing body lotion also has prebiotic oat that intensely moisturizes
        for 24 hours and leaves skin soft and smooth all day long</li>
    <li>To help calm and relax you, massage in this calming lavender scented body lotion after bathing,
        before bed, or anytime you want to relax, to lock in moisture, and to leave skin feeling soft
        and smooth</li>
    <li>A dermatologist-recommended brand for over 70 years, Aveeno uses the goodness of nature and the
        power of science to keep your skin healthy and balanced. This body lotion is formulated for
        sensitive skin, non-comedogenic, paraben free, and dye free</li>
    <li>Aveeno Stress Relief Moisturizing Body Lotion with lavender scent and prebiotic oat has a bottle
        made with 30% Post-Consumer Recycled Plastic</li>`,
        description: `Aveeno Stress Relief Moisturizing Body Lotion with lavender scent and prebiotic oat
helps calm and relax you while moisturizing for a full 24 hours to leave skin soft and smooth. Using
the goodness of nature and the power of science, this soothing daily body lotion is made with
prebiotic oat and intensely hydrates skin, leaving it feeling soft and smooth. It also combines the
calming scent of lavender and prebiotic oat to help calm and relax you as you massage it into your
skin to help you unwind and lock in moisture. This lavender scented body lotion has a nourishing
non-greasy formula that absorbs quickly for lasting moisture throughout the day and is from Aveeno,
a dermatologist recommended brand for over 70 years. This moisturizing stress relief lotion is
formulated for sensitive skin and is non-comedogenic, paraben free, dye free, and gentle. This
bottle is made with 30% Post-Consumer Recycled Plastic.`,
        details: `
<li>Is Discontinued By Manufacturer : No</li>
<li>Product Dimensions : 2.25 x 4.5 x 9.5 inches; 0.09 Ounces</li>
<li>Item model number : I00108841</li>
<li>UPC : 381371182183</li>
<li>Manufacturer : Johnson & Johnson</li>
<li>ASIN : B07GC86X9X</li>
<li>Country of Origin : USA</li> `,
        preview: `<p>Aveeno Stress Relief Moisturizing Body Lotion with Lavender, Natural Oatmeal
and Chamomile & Ylang-Ylang Essential Oils to Calm & Relax, 33 fl. oz </p>`,
        ingredients: `Chamomile`,
        container: `lotion`

    },
    {
        name: 'Eucerin', price: 28, oldPrice: 32, about: `
    <li>Helps to Heal and Protect: This Eucerin lotion for dry skin helps to heal and protect extremely dry, sensitive and compromised skin</li>
    <li>Fragrance Free: Eucerin Original Healing fragrance free body lotion is also dye free, and is safe for use as a daily moisturizing lotion</li>
    <li>Replenish Skin's Moisture Barrier: This Eucerin sensitive skin lotion helps to prevent moisture loss by replenishing the skin’s moisture barrier</li>
    <li>Convenient Lotion Pump Bottle: Eucerin body lotion pump bottle is perfect for storage at home or in the office</li>
    <li>Includes one (1) 16.9 fluid ounce pump bottle of Eucerin Original Healing Lotion</li>`,
        description: `<p class="mb-4-1">
        Eucerin Original Healing Lotion is a time-tested formula that helps heal and protect extremely dry, sensitive and compromised skin. 
        The thick, rich body lotion for dry skin formula provides intensive moisture for dry skin. Eucerin Original Healing Lotion binds water
         to the skin to provide effective moisturization, and this unscented body lotion helps prevent moisture loss by replenishing the skin’s 
         moisture barrier. This non-comedogenic lotion for sensitive dry skin is fragrance free and dye free, and is gentle enough for use as a 
         daily body lotion. This body moisturizer is perfect as a lotion for very dry skin, and can also be used as a hand lotion or foot lotion.
          To use, smooth this Eucerin dry skin lotion onto your skin daily. For best results, apply after showering. Eucerin is a 
          dermatologist-recommended skincare brand that is based on an uncompromising approach to science. With skin care products designed
           to restore and sustain healthy-looking skin, families everywhere look to Eucerin to enhance outer beauty and self-confidence. 
    </p>`,
        details: `
<li>Is Discontinued By Manufacturer : No</li>
<li>Product Dimensions : 1.87 x 3.19 x 9.31 inches; 1.2 Pounds</li>
<li>Item model number : Euc-4336</li>
<li>UPC : 072140110208</li>
<li>Manufacturer : Eucerin</li>
<li>ASIN : B00BPF3LN2</li>
<li>Country of Origin : USA</li> `,
        preview: `<p> Eucerin Original Healing Rich Body Lotion, Body Lotion for Dry Skin, 16.9 Fl Oz Pump Bottle </p>`,
        ingredients: `Emollient Enriched`,
        container: `lotion`

    },
    {
        name: 'Jergens', price: 15, oldPrice: 11, about: `
    <li>HELPS RELIEVE DRY SKIN: Jergens Ultra Healing Moisturizer helps to improve skin's appearance and texture</li>
    <li>EXTRA DRY SKIN LOTION: Absorbs into extra dry skin, including typically rough spots like heels, elbows, and knees</li>
    <li>HELPS TO REPAIR DRY SKIN: Penetrates five layers of skin and reduce dryness at the source</li>
    <li>VISIBLY HEALTHIER SKIN: With continual use of Jergens Ultra Healing Dry Skin Moisturizer, skin is nourished and looks visibly healthier over time</li>
    <li>FORMULATED WITH QUALITY INGREDIENTS: A unique formulation, with Hydralucence blend of ingredients combined with Vitamins C, E, and B, to leave skin luminous</li>`,
        description: `
        Repair dryness at the source with Jergens Ultra Healing Moisturizer for Extra Dry Skin. The nourishing formula penetrates through five layers of skin to 
        heal extra dry skin, improve tone and texture, and leave it smooth and visibly healthier. The formula absorbs to soften areas that tend to need the most
         moisture like heels, elbows, and knees. This body moisturizer, with a unique HYDRALUCENCE blend of ingredients plus Vitamins C, E, and B5, leaves your 
         skin luminous and moisturized for up to 48 hours. Jergens hand and body lotion for women and men is carefully formulated for optimal dry skin relief. 
         Jergens hand lotion with pump hydrates and moisturizes dry and cracked hands for extra dry skin relief. Body cream for women and men soothes skin for 
         long lasting hydration. Hand cream for dry cracked hands rejuvenates cracked skin for optimal moisture. Satisfaction Guaranteed. Limitations may apply. `,
        details: `
<li>Is Discontinued By Manufacturer : No</li>
<li>Product Dimensions : 1.46 x 1.54 x 3.23 inches; 3.84 Ounces</li>
<li>Item model number : 11000</li>
<li>UPC : 072140110208</li>
<li>Manufacturer : Kao USA Inc.</li>
<li>ASIN : B0034F9K36</li>
<li>Country of Origin : USA</li> `,
        preview: `<p>Jergens Ultra Healing Dry Skin Moisturizer, Body and Hand Lotion for Dry Skin, for Quick Absorption into Extra Dry Skin, with HYDRALUCENCE blend, Vitamins C, E, and B5, 32 Ounce</p>`,
        ingredients: `Vitamin c,vitamin e`,
        container: `lotion`

    },
    {
        name: 'Lubriderm', price: 25, oldPrice: 29, about: `
    <li>24-fluid ounce bottle with pump of Lubriderm Daily Moisture Hydrating Hand and Body Lotion is a solut</li>
    <li>This moisturizing daily lotion is enriched with Pro-Vitamin B5 and skin-essential moisturizers naturally found in healthy skin to improve skin's moisture barrier</li>
    <li>Daily Moisture Hydrating Lotion is designed for normal-to-dry skin types and is great for smoothing over hands and full body every day. This lotion helps replenish and moisturize dry skin</li>
    <li>Hydrating daily lotion is clinically shown to help moisturize dry skin for 24 hours for healthy-looking skin</li>
    <li>This daily hydrating moisture lotion is non-greasy for a clean, pleasant feel on the skin. From Lubriderm, a dermatologist developed brand</li>`,
        description: `.
        Ideal for normal-to-dry skin types, Lubriderm Daily Moisture Lotion is a solution to replenish and moisturize dry skin. From a dermatologist developed brand,
         this daily hydrating lotion is clinically shown to help moisturize dry skin for 24 hours and helps achieve healthy-looking skin. The lotion is enriched with
          Pro-Vitamin B5 and essential moisturizers naturally found in healthy skin to improve skin's moisture barrier. Great for smoothing over hands and body every
           day, Lubriderm Daily Moisture Lotion is non-greasy for a clean, pleasant feel on the skin. `,
        details: `
<li>Is Discontinued By Manufacturer : No</li>
<li>Product Dimensions : 9.02 x 4.02 x 1.89 inches; 1.7 Pounds</li>
<li>Item model number : 052800488625</li>
<li>UPC : 678213682919 </li>
<li>Manufacturer : Lubriderm</li>
<li>ASIN : B003JT8PKQ</li>
<li>Country of Origin : USA</li> `,
        preview: `<p>Lubriderm Daily Moisture Hydrating Body and Hand Lotion To Help Moisturize Dry Skin with Pro-Vitamin B5 For Healthy-Looking Skin, Non-Greasy, 24 fl. oz</p>`,
        ingredients: `Cetyl alcohol,glycerin,vitamin b5`,
        container: `lotion`

    },
    {
        name: 'Curel', price: 16, oldPrice: 10, about: `
    <li>REPAIR YOUR SKIN - Hydrates and relieves dry, irritated, itchy skin</li>
    <li>ALL DAY MOISTURIZER - Time-released hydration provides 24 hours of continuous relief</li>
    <li>RESTORE MOISTURE - Helps to restore skin's natural moisture barrier with daily use</li>
    <li>FORMULATED WITH SAFE INGREDIENTS - Non-irritating, non-greasy, and fast-absorbing</li>
    <li>DRY SKIN RELIEF - With Advanced Ceramide Complex, the lotion restores skin's ceramide levels to help retain moisture and prevent symptoms of dry, damaged skin from returning</li>`,
        description: `
        Relieve dry skin and keep it hydrated all day long with Curél Daily Healing Body Lotion for Dry Skin. While traditional body lotions hydrate only on the skin's 
        surface, Curél Daily Healing Lotion works at the source of dryness & helps repair it's moisture barrier. With Advanced Ceramide Complex, the lotion replenishes
         ceramides, helps skin retain moisture, & helps prevent dry skin from returning. The time-released hydration is proven to provide 24 hours of continuous
          moisturization. Dermatologist recommended, Kao USA Curél Daily Healing Lotion is non-greasy & absorbs quickly. Skin is left smooth, comforted, and intensely 
          satisfied. Satisfaction Guaranteed. Limitations may apply.`,
        details: `
<li>Is Discontinued By Manufacturer : No</li>
<li>Product Dimensions : 2.31 x 3.5 x 10.13 inches; 1.25 Pounds</li>
<li>Item model number : 10536</li>
<li>UPC : 678213682919 </li>
<li>Manufacturer : Kao USA Inc.</li>
<li>ASIN : B003JT8PB003A86J18KQ</li>
<li>Country of Origin : USA</li> `,
        preview: `<p>Curel Daily Healing Body Lotion for Dry Skin, Hand and Body Moisturizer Repairs Dry Skin and Retains Moisture, with Advanced Ceramides Complex, 20 Ounce</p>`,
        ingredients: `Ceramide`,
        container: `lotion`

    },
    // ------Accessories------//
    {
        name: 'Balance Ball', price: 14, oldPrice: 20,
        about: `<li>BALANCE BALL KIT: Total Body Balance Ball workout kit with medium (65 cm) exercise ball for an
        ideal low-impact core strengthening workout</li>
    <li>WORKOUT GUIDE INCLUDED: Exercise abs, back, glutes, lower and upper body with the included yoga
        ball and a 105-minute workout designed by fitness expert Tanja Djelevic</li>
    <li>65cm BALANCE BALL: Medium size balance ball is recommended for users between 5'6" and 5'11"
        tall. Use the stability ball as an exercise and fitness tool or as an alternative office desk
        chair solution for active sitting.</li>
    <li>KIT INCLUDES: Medium green exercise ball for yoga and Pilates, easy-inflate air pump, and
        workouts (Packaging may vary to include DVD or Digital Download)</li>
    <li>INFLATION NOTICE: It may be necessary to re-inflate your new Balance Ball once or twice after
        initial inflation to stretch the ball to its final size. Inflate ball with air, let stand for 24
        hours, deflate 50% then fill again to 65cm height.</li>`,
        description: `The Total Body Balance Ball Workout was developed to combine our Balance Ball with
        resistance training for maximum results. Leading fitness instructor Tanja Djelevic takes you through
        a series of Pilates, yoga and strength moves using the exercise ball to focus on major muscle
        groups. Use the yoga ball to improve your body’s core strength and natural balance while getting
        trim and toned. This stability ball kit delivers dynamic whole-body workouts that range from
        beginner to advanced featuring a 105-minute workout tailored to the Total Body Balance Ball with
        three 20-minute focused segments on abs, upper and lower body and a Balance Ball Express with three
        10-minute segments.`,
        preview: `Gaiam Total Body Balance Ball Kit - Includes Anti-Burst Stability Exercise
        Yoga Ball, Air Pump, Workout Program`,
        ingredients: `Polyvinyl Chloride (PVC)`,
        details: `<li>Brand : Gaiam</li>
        <li>Item Weight : Grams</li>
        <li>Material : 880 Pounds</li>
        <li>Age Range (Description) : Adult</li>
        <li>Product Dimensions : 29.49"L x 29.49"W x 29.49"H</li>
        <li>tem Package Dimensions L x W x H : .39 x 9.61 x 4.65 inches</li>
        <li>Package Weight : 1.31 Kilograms</li>
        <li>Style : Green (65cm)</li>
        <li>Included Components : 1 x Yoga Ball, 1 x Air Pump, 1 x Workout Guide</li>
        <li>ASIN : B000VDXFU8</li>`,
        container: `Acces`


    },
    {
        name: 'Mini Exercise Bike', price: 55, oldPrice: 60,
        about: `<li>【WORK FROM HOME FITNESS】This under desk cycle combining arm and leg exercises, not only allows
        you to exercise to the muscles and joints of the knees, ankles, feet, but also can be used on
        the table to exercise the arms, wrists, shoulders and other joints. It is used for office
        workers, elderly people, people with sports injuries, and rehabilitators to do physical therapy
        to relieve pain, restore and maintain motor function.</li>
    <li>【MULTIPLE STABILITY DESIGN】Weighing only 7.27 pounds, This under desk bike pedal exerciser
        supports one-handed hold and release with non-slip pedals as well as non-slip feet for stability
        during exercise, and adjustable four-hole straps serve to protect both feet and hands for added
        comfort and safety, making it ideal for home use.</li>
    <li>【ADJUSTABLE RESISTANCE】The adjustable resistance knob of the exercise mini bike can meet
        different physical conditions and bring a personalized experience. No noise is made during
        exercise, which is great for beginners with this low impact exercise, ideal for rehabilitation
        after surgery or injury. Specially designed for the elderly and rehabilitators.</li>
    <li>【MULTI-FUNCTIONAL DISPLAY】The multi-function LCD monitor can display time, distance, total count
        and calories through the buttons in use. Helps increase strength, improve coordination and
        circulation. Large and easy-to-read display can keep track of your workout progress easily and
        allow you to read all data clearly.</li>
    <li>【PORTABLE AND EASY TO STORE】Lightweight design, portable and easy to assemble. The portable
        handle function makes the fitness exercise bike always ready. Product size: 13.7" x 15.7" x
        11.6". You can put it under the desk, beside the sofa or in the locker. Small size and space
        saving - can be used at home or office.</li>`,
        description: `Portable Mini Exercise Bike, Under Desk Bike Pedal Exerciser for Arm/Leg Exercise,
        Adjustable Magnetic Resistance Desk Cycle with LCD Screen Display for Home/Office Workout`,
        preview: `FEIERDUN Mini Exercise Bike, Under Desk Bike Pedal Exerciser Portable Foot
        Cycle Arm & Leg Peddler Machine with LCD Screen Displays`,
        ingredients: `Battery Powered`,
        details: `<li>Brand : </li>
        <li>Special Feature : Portable</li>
        <li>Color : BLACK</li>
        <li>Power Source : Battery Powered</li>
        <li>Recommended Uses For Product : Indoor</li>
        <li>Item Weight : .27 Pounds</li>
        <li>Material : Polyvinyl Chloride (PVC)</li>
        <li>Resistance Mechanism : </li>
        <li>Product Dimensions : .7"D x 11.6"W x 13.7"H</li>
        <li>Package Weight : 4.17 Kilograms</li>
        <li>ASIN : B0BQLJYDGM</li>`,
        container: `Acces`

    },
    {
        name: 'Muscle Stimulator', price: 50, oldPrice: 69,
        about: `<li>2-in-1 TENS UNIT: Our electric muscle stimulator provides targeted pain relief by using TENS
        technology to send electrical impulses to target muscles and alleviate knee and elbow pain</li>
    <li>EASY OPERATION: The TENS device is easy-to-use – the unit features auto shut-off and built-in
        timer function to help keep track of your treatment time</li>
    <li>ADJUSTABLE INTENSITY: The e-stim machine is equipped with 25 adjustable intensity levels so you
        can find the program that best fits your needs – the digital LCD display helps you to easily
        visualize your desired intensity level</li>
    <li>UNIVERSAL BRACE: The ergonomic universal brace with a hook-and-loop fastener can be used on
        elbows and knees and fits both large and small circumferences – the elbow and knee sleeve is
        designed with 2 water contact electrodes, so no gel is needed</li>
    <li>DRUG-FREE PAIN RELIEF: Get natural pain relief at home – our TENS stimulator is ideal for aiding
        with pain from common overuse injuries, such as runners knee, tennis elbow, and more</li>
    <li>PLEASE NOTE: This product is not recommended for use on any part of the body that has a metal
        implant, i.e. knee replacements which contain metal components</li>`,
        description: `The Beurer 2-in-1 Knee & Elbow Muscle Stimulator provides targeted and comfortable
        muscle knee pain relief. The pain management programs allow you to manage your knee or elbow pain
        with electrostimulation. We've designed our EM34 TENS machine to provide you with tailored relief,
        knee support, patella stabilizing and meniscus recovery. The portable physical therapy device is
        lightweight and easy to use. It includes an adjustable body-fitting, ergonomic cuff with a
        hook-and-loop fastener, batteries, and a convenient belt clip. The stretchy universal cuff can be
        used for both elbow and knee. The unit features a display panel which indicates if the device is
        powered and visualizes the intensity level. From there, you can easily increase and/or decrease the
        strength with the buttons on the unit. It is an ideal accessory for runners. What is TENS? TENS
        (Transcutaneous Electrical Nerve Stimulation) treats the area directly by working in harmony with
        your body to alleviate both severe and chronic pain. The low voltage electrical current travels
        through the electrodes and into the skin stimulating specific nerve pathways to produce a tingling
        or massaging sensation that reduces and suppresses pain signals from reaching the brain.`,
        preview: `Beurer EM34 TENS Unit Muscle Stimulator, 2-in-1 Knee & Elbow TENS Machine,
        E-Stim Device for Knee Pain Relief with 25 Intensity Levels, Electric
        Massager with Universal Brace`,
        ingredients: `Battery Powered`,
        details: ` <li>Product Dimensions  :  7 x 4.7 x 3.9 inches; 1 Pounds</li>
        <li>Item model number  :  EM34</li>
        <li>Batteries  :  3 AAA batteries required. (included)</li>
        <li>Date First Available  :  July 31, 2017</li>
        <li>Manufacturer  :  Beurer North America LP</li>
        <li>ASIN  :  B073HMFW87</li>
        <li>Country of Origin  :  China</li>
        <li>Domestic Shipping: Currently, item can be shipped only within the U.S. and to APO/FPO addresses. For
            APO/FPO shipments, please check with the manufacturer regarding warranty and support issues.</li>`,
        container: `Acces`

    },
    {
        name: 'Dumbbell', price: 9, oldPrice: 12,
        about: `<li>DURABLE CAST IRON: Constructed from durable materials that increase toughness and stability as
        you train. Strong build will not break after vigorous workouts.</li>
    <li>NON-SLIP NEOPRENE COATING: Ideal training for toning and sculpting arms, shoulders, back while
        you build stamina and improve metabolic rate. The malleable handle on this weight dumbbell makes
        it easy to grip.</li>
    <li>EXCELLENT FOR TRAINING: These workout dumbbells are excellent for resistance training. The
        easy-grip handles give you control for bicep curls and other arm exercises.</li>
    <li>MULTIPLE WEIGHTS: The Sunny Health and Fitness dumbbells come in multiple weights and colors.
        Clear printed weights allow you to distinguish different weights from others. Available in 2Lbs,
        5 Lbs, 8Lbs, 10 Lbs.</li>
    <li>COMPACT AND ERGONOMIC: Designed for complete control during your workout and small and compact
        enough for fitness training on the go. Perfect for home workouts or walking exercise.</li>`,
        description: `Enhance your home workouts with a bit of resistance when you use the Sunny Health and
        Fitness Neoprene Dumbbells (NO. 021). This set is an excellent way to add some extra intensity to
        your workout routine. Use these 10 lb. dumbbells for aerobic workouts, toning or walking exercises.
        Neoprene-coated dumbbells are fast becoming one of most popular choices in dumbbell workouts. A soft
        to the touch feel and eye-catching colors help make this item a popular choice. The neoprene coating
        is soft, durable and non toxic. The malleable handle on this weight dumbbell makes it easy to grip
        even when you are sweating.`,
        preview: `Sunny Health & Fitness Neoprene Coated Hex Shaped Dumbbell Non-Slip
        Fitness Weights for Home Gym Exercise, Full Body Workout Strength
        Building, Weight Loss, Sold in Pairs - Sizes - 2LB, 5LB, 8LB, 10LB`,
        ingredients: `Neoprene`,
        details: `<li>Brand : Sunny Health & Fitness</li>
        <li>Color : Black, 10-Pound</li>
        <li>Item Weight: 4.5 Kilograms</li>
        <li>Material: Neoprene</li>
        <li>Special Feature : Compact</li>
        <li>Product Dimensions : 8"L x 4"W</li>
        <li>Handle Material : Iron</li>
        <li>ASIN : B07L1QN9QN</li>`,
        container: `Acces`

    },
    {
        name: 'Wheel Chair', price: 125, oldPrice: 149,
        about: `<li>Flip-back, desk-length arms make it easy to navigate under tables | elevating leg rests enhance comfort and remove easily</li>
        <li>Breathable nylon upholstery is soft and comfortable</li>
        <li>Premium welds ensure reliability and durability</li>
        <li>Smooth-rolling Mag wheels with low-maintenance flat-free tires; foot-powered movement with 2” seat-height adjustments (hemi-height)</li>
        <li>300-Lb. Weight capacity | 33-lb. Product weight, without leg rests. Latex free; Not MRI safe</li>`,
        description: `This smartly designed, lightweight Medline Wheelchair is simple to maneuver yet sturdy enough to support people weighing up to 
        300 pounds.A great choice for on - the - go users who want the easy Access of flip- back desk arms and the enhanced comfort of elevating leg
         rests.The adjustable backrest moves up and down for customized support.`,
        preview: `Medline Lightweight & User-Friendly Wheelchair With Flip-Back, Desk-Length Arms & Elevating Leg Rests for Extra Comfort, Black, 18 inch Seat`,
        ingredients: `Neoprene`,
        details: `<li> Is Discontinued By Manufacturer : No</ >
        <li>Product Dimensions : 25.5 x 25.5 x 38 inches; 34 Pounds</li>
        <li>Department: Unisex-adult</li>
        <li>Manufacturer: Medline Industries Healthcare</li>
        <li>ASIN : B00737NJ92</li>
        <li>Country of Origin : China</li>`,
        container: `Acces`

    },
    {
        name: 'Yoga Mat', price: 10, oldPrice: 16,
        about: `<li>FITNESS & EXERCISE MAT: Classic yoga mat is great for all types of fitness and exercise routines including yoga, Pilates and any floor exercise where additional cushion and support is appreciated.</li>
        <li>EXTRA THICK YOGA MAT: These 2/5 inch exercise mats make for the ideal all purpose fitness mat in the studio or at home, even around the house under knees or as a standing pad or cushion.</li>
        <li>SOFT CUSHION: This yoga mat made of NBR foam is designed to provide soft cushioning with the padded material for comfortable stretching and posing - an ideal yoga mat for beginners with comfort in mind.</li>
        <li>INCLUDES YOGA MAT CARRIER STRAP: Included with your yoga mat is a carrying strap so you can strap up your mat and go.</li>
        <li>DIMENSIONS: 72 inches L x 24 inches W x 2/5 Inch (3.11 pounds).</li>`,
        description: `Gaiam Essentials Thick Yoga Fitness Exercise Mats are the ideal classic exercise mat for all types of yoga, Pilates and floor exercises. These durable, 
        yet lightweight fitness mats are extra-thick (2/5 Inch) for the additional cushioning your joints need during any yoga or fitness routine. Featured in classic colors 
        with an included carrying strap so you can strap up your mat and go. 72"L x 24"W x 2/5 Inch (3.11 lbs).`,
        preview: `Gaiam Essentials Thick Yoga Mat Fitness & Exercise Mat with Easy-Cinch Yoga Mat Carrier Strap, 72"L x 24"W x 2/5 Inch Thick`,
        ingredients: `Nitrile Butadiene Rubber Foam`,
        details: ` <li>Package Weight  :  0.95 Kilograms</li>
        <li>Item Package Dimensions  :  24 x 6.5 x 6.5 inches</li>
        <li>Brand Name  :  Gaiam</li>
        <li>Manufacturer  :  Fit For Life</li>
        <li>Manufacturer  :  Beurer North America LP</li>
        <li>ASIN  :  B07H9PZ42P</li>
        <li>Country of Origin  :  China</li>`,
        container: `Acces`

    },
    // ------Oils------//
    {
        name: 'Basil Essential', price: 25, oldPrice: 30,
        preview: `Basil essential oil refreshes the mind when inhaled and soothes fatigued
    muscles when massaged into the skin. Basil Vitality™ essential oil may provide
    circulatory and digestive support and digestive support and infuses recipes with
    its sweet, herbaceous flavor.`,
        ingredients: `15ml`,
        about: `<p class="mb-4-1">Alexander the Great is believed to have brought basil to ancient Greece.
    Basil is also considered a symbol of love, eternal life, purification, and protection in Hindu
    culture.
    In some folklore, basil is used as a good luck charm for protection and to attract wealth.
    Basil essential oil has an herbaceous aroma that refreshes the mind when inhaled and soothes
    fatigued muscles when massaged into the skin.
    Basil Vitality™ may support the circulatory and digestive systems when combined with a healthy diet
    and regular exercise.
    Its sweet, herbaceous flavor makes it a great addition to your favorite savory recipes. Basil and
    Basil Vitality are the same essential oil.
</p>`,
        features: ` <li>Is calming and uplifting when diffused during times of everyday stresses</li>
        <li>Eases occasional muscle and joint discomfort when applied with massage</li>
        <li>Contains antioxidant properties*</li>
        <li>Helps support a healthy digestive system*</li>
        <li>Supports overall well-being*</li>
        <li>Can be added to a daily regimen to support female wellness*</li>
        <li>Supports a healthy circulatory system when combined with a healthy diet and regular exercise*
        </li>
        <li>Adds a fresh, herbaceous flavor to recipes</li>
        <li>Is a fresh and herby addition to salad dressings, sauces, and marinades</li>`,
        directions: `<li>Topical: Apply 2−4 drops directly to desired area. Dilution not required, except
        for
        the most sensitive skin. Use as needed.</li>
    <li>Aromatic: Diffuse up to 1 hour 3 times daily. </li>`,
        suggested: `<li>Add a drop to your recipes to help support a healthy digestive system.</li>
        <li>Add an oil-dipped toothpick amount to your soups, dips, and recipes to support overall
            well-being.</li>
        <li>Add it to a daily regimen to support female wellness.</li>
        <li>Remember when adding Basil Vitality to your recipes, less is more for a fresh and herby addition
            to salad dressings, sauces, and marinades.</li>
        <li>Add a drop to your lotion to cleanse and soothe the skin.</li>
        <li>Massage a few diluted drops into skin to help reduce occasional nervous tension.</li>
        <li>Diffuse 8−20 drops for a calming and uplifting aroma during times of everyday stresses.</li>
        <li>Ease occasional muscle and joint discomfort by applying Basil with massage.</li>
        <li>Add Basil to Ortho Sport® or Ortho Ease® massage oils to soothe fatigued muscles.</li>`,
        container: `oils`
    },
    {
        name: 'Frankincense Essential', price: 28, oldPrice: 32,
        preview: `Frankincense has been used in religious rituals for over 3,000 years. It has
        been known to enhance immunological function, beautify skin, and increase
        spiritual awareness.`,
        ingredients: `15ml`,
        about: `Frankincense essential oil has a grounding, woodsy aroma that can be used to enhance
        meditation and increase spiritual awareness to be able to focus on one’s desired potential. Applied
        topically, it promotes the appearance of healthy looking skin while reducing the appearance of
        uneven
        skin tones. Frankincense Vitality essential oil has a spicy, exotic taste and carries properties
        that can help support overall well-being and a healthy immune system when taken internally.*
        Frankincense essential oil is considered a holy oil in the Middle East, where it has been used in
        religious ceremonies for thousands of years and was one of the gifts given to Christ at his birth.
        Frankincense is mentioned in the Ebers Papyrus, an ancient Egyptian scroll from approximately 1500
        BCE that documents its use. Young Living distills Frankincense essential oil from the resin of
        Boswellia carterii trees located in northern Africa, near the Arabian Peninsula. *Frankincense and
        Frankincense Vitality are the same essential oil.`,
        features: `<li>Promotes the appearance of healthy-looking skin Reduces the appearance of uneven skin tones</li>
        <li>Promotes feelings of relaxation and tranquility</li>
        <li>May support overall well-being*</li>
        <li>Supports healthy immune function*</li>
        <li>Can be taken as a dietary supplement for general health*</li>
        <li>Can be added to your favorite foods or beverages</li>`,
        directions: `<li>Topical: Apply 2−4 drops directly to desired area. Dilution not required, except
        for
        the most sensitive skin. Use as needed.</li>
    <li>Aromatic: Diffuse up to 1 hour 3 times daily. </li>`,
        suggested: `<li>Add to your moisturizer to promote the appearance of healthy-looking skin and even skin tones.
        </li>
        <li>Add a few drops to V-6TM Vegetable Oil Complex and use it in a massage after activity.</li>
        <li>Diffuse to bring a feeling of peace and calmness in your home and help with more inward
            retrospection.</li>
        <li>Incorporate into your yoga ritual to promote feelings of relaxation and tranquility.</li>
        <li>Create a safe and comforting environment by diffusing while engaged in prayer or meditation.
        </li>
        <li>Add to your favorite foods or beverages to enjoy overall well-being.*</li>
        <li>Take internally as dietary supplement by taking 1-2 drops to a capsule to assist healthy immune
            function.*</li>`,
        container: `oils`
    },
    {
        name: 'Lavender Essential', price: 28, oldPrice: 32,
        preview: `Lavender oil is the most universal oil and has a tranquil aroma that is
        soothing to the senses, as well as to the skin when applied topically. Taken
        internally, it contains antioxidants, may provide immune support, and can be
        used to add a floral flavor to your evening tea.`,
        ingredients: `15ml`,
        about: `Derived from the Latin word “lavare,” which means “to wash,” Lavender oil has been
        used extensively for thousands of years as a fragrant addition to baths and laundry and as a
        culinary and medicinal herb. Native to the Mediterranean, lavender is a member of the mint family
        and has a soothing floral aroma that is often added to perfumes, massage oils, and facial care
        products. Considered the panacea of aromatherapy, Lavender essential oil has endless uses. In
        addition to its tranquil aroma, Lavender provides many skin care benefits when applied topically.
        Lavender Vitality™ essential oil contains cleansing and antioxidant properties and adds a mellow
        floral flavor to your evening tea.* Lavender and Lavender Vitality are the same essential oil.`,
        features: `<li>Has a sweet, floral aroma</li>
        <li>May help cleanse and soothe minor skin irritations when applied topically</li>
        <li>Creates a tranquil environment when diffused or applied topically</li>
        <li>May help ease occasional nervous tension and improve sleep quality for occasional sleeplessness*
        </li>
        <li>Contains cleansing and antioxidant properties*</li>
        <li>Supports general wellness*</li>`,
        directions: `<li>Topical: Apply 2−4 drops directly to desired area. Dilution not required, except
        for
        the most sensitive skin. Use as needed.</li>
        <li>Aromatic: Diffuse up to 1 hour 3 times daily. </li>`,
        suggested: `<li>Apply Lavender topically following sun exposure or add it to your facial essence, serum, or
        moisturizer.</li>
    <li>Diffuse it with Cedarwood and Orange to create a peaceful space at bedtime.</li>
    <li>Add 4 drops of Lavender and 1 cup of Epsom salt to a bath to create a relaxing environment.
    </li>
    <li>Use it as a spot treatment for minor bumps and blemishes.</li>
    <li>Unwind in the evening with a calming Lavender-infused neck or back massage. </li>
    <li>Place a few drops in your water in the evening to help improve sleep quality for occasional
        sleeplessness.*</li>
    <li>Add 2 drops to a vegetarian capsule to take advantage of Lavender Vitality’s cleansing and
        antioxidant properties.*</li>`,
        container: `oils`
    },
    {
        name: 'Lime Essential', price: 32, oldPrice: 28,
        preview: `Lime essential oil uplifts the senses with its lively, refreshing, citrus
        aroma. When taken internally, it contains antioxidants and may provide
        general wellness support.`,
        ingredients: `15ml`,
        about: `Citrus aurantifolia, also known as Mexican or key lime, is a shrub-like evergreen tree
        native to tropical Southeast Asia. It produces smaller, more aromatic fruit than the related Citrus
        x latifolia, or Persian lime, which is more commonly available in the United States as a culinary
        fruit. Lime essential oil has a sharp, green, citrus aroma that uplifts the senses when used
        aromatically or applied topically. Lime Vitality™ essential oil has a delightful citrus flavor,
        contains antioxidants, and may provide general wellness support when taken internally.* Lime and
        Lime Vitality are the same essential oil.`,
        features: `<li>Has a bright, sharp, green, citrus aroma</li>
        <li>Adds a fruity, tropical aroma to bath and body care products </li>
        <li>Uplifts the senses, neutralizes unwanted odors, and purifies the air when diffused</li>
        <li>Is a great addition to household cleaning solutions</li>
        <li>May provide general wellness support when taken internally*</li>
        <li>Contains antioxidants*</li>`,
        directions: `<li>Dilute 1 drop with 1 drop of V-6™ Vegetable Oil Complex and apply to desired area as needed.
        </li>
        <li>Aromatic: Diffuse up to 30 minutes 3 times daily.</li>`,
        suggested: `<li>Diffuse Lime with Vanilla and Bergamot for a bright, tropical home aroma.</li>
        <li>Add a few drops to your favorite body lotion or massage oil and enjoy its zesty aroma and
            skin-cleansing benefits.</li>
        <li>Add Lime to home cleaning solutions or mix it with alcohol-free witch hazel to make a
            fabric-refreshing spray.</li>
        <li>Add 1–2 drops of Lime Vitality to your sparkling water or NingXia Red® for a crisp and
            refreshing beverage.</li>
        <li>Add a few drops of Lime Vitality to your favorite sauces or marinades to add a burst of fresh
            lime flavor.</li>`,
        container: `oils`
    },
    {
        name: 'Black Pepper Essential', price: 25, oldPrice: 18,
        preview: `Black Pepper essential oil has a spicy, energizing aroma. Taken internally,
        it offers antioxidant properties, supports healthy weight management and
        digestive wellness when combined with a healthy lifestyle.`,
        ingredients: `5ml`,
        about: `Black pepper is the most common and potent flavoring of the peppercorn family.

        It was used by Egyptians in mumification as evidenced by the discovery of black pepper in the
        nostrils and abdomen of Ramses II. Indian monks ate several black peppercorns a day to give them
        endurance during their arduous travels. In ancient times pepper was as valuable as gold or silver.
        Black Pepper essential oil comes from Madagascar. This spice has been commonly used across the world
        while the essential oil is less known. Its distinctive, peppery flavor makes it a common addition to
        many recipes, from appetizers to entrees. When using the essential oil of black pepper please
        remember it is more potent than sprinkling pepper at the table.

        Black Pepper essential oil and Black Pepper Vitality are the same essential oil.`,
        features: `<li>Has a sharp, spicy, peppery aroma</li>
        <li>Contains antioxidants*</li>
        <li>Supports healthy weight management with a balanced diet and exercise </li>
        <li>Included in Zyng and Ningxia Nitro</li>
        <li>Found in Cel-Lite Magic massage oil and these essential oil blends Awaken, Dream Catcher,
            En-R-Gee and Relieve It</li>`,
        directions: `<li>Dilute 1 drop with 1 drop of V-6™ Vegetable Oil Complex and apply to desired area as needed.
        </li>
        <li>Aromatic: Diffuse up to 30 minutes 3 times daily.</li>`,
        suggested: `<li>Dilute and use for massage</li>
        <li>The fragrance of Black Pepper can be energizing and stimulating.</li>
        <li>Apply diluted to bottoms of feet in the morning to start your day with an aromatic boost.</li>
        <li>Add a few drops to your recipes offering support to your digestive wellness when combined with a
            balanced diet.</li>
        <li>Use as a flavoring to your foods to support a healthy lifestyle.</li>
        <li>Use to enhance the flavor of your favorite dishes, marinades, dressings, meats, vegetables,
            soups, stews</li>`,
        container: `oils`
    },
    {
        name: 'Cinnamon Bark', price: 30, oldPrice: 35,
        preview: `Cinnamon oil has a warm, spicy aroma that cleanses the air and creates a
        warming sensation on the skin when used with massage. When taken internally,
        it contains antioxidants and may provide immune and general wellness
        support.`,
        ingredients: `15ml`,
        about: `Native to Sri Lanka, Ceylon cinnamon, or true cinnamon, is a tall, leafy bush that
        produces fragrant bark and leaves. A member of the laurel family, it is well known the world over as
        an aromatic culinary spice. Cinnamon Bark essential oil is steam distilled from the inner bark of
        the tree and has a warm, spicy aroma that evokes memories of the holidays when diffused. Cinnamon
        Bark Vitality™ contains antioxidants and may provide immune and general wellness support when taken
        as a dietary supplement.* Cinnamon Bark and Cinnamon Bark Vitality are the same essential oil.`,
        features: `<li>Has a warm, spicy aroma </li>
        <li>Eliminates odors when used aromatically</li>
        <li>Creates a warming sensation when applied topically</li>`,
        directions: `<li>Dilute 1 drop with 1 drop of V-6™ Vegetable Oil Complex and apply to desired area as needed.
        </li>
        <li>Aromatic: Diffuse up to 30 minutes 3 times daily.</li>`,
        suggested: `<li>Dilute Cinnamon Bark with V-6 Vegetable Oil</li>
        <li>Complex and massage it on your feet for a warming sensation.</li>
        <li>Diffuse it in your home, especially during the holidays, for an inviting, warm environment.</li>
        <li>Take Cinnamon Bark Vitality as a dietary supplement to help support a healthy immune system.*
        </li>
        <li>Elevate your fruit smoothie or green drink with a drop of Cinnamon Bark Vitality and benefit
            from its antioxidant properties.*</li>`,
        container: `oils`
    },
    // ------Helping machine------//
    {
        name: 'Electronic Pulse Stimulator', price: 34, oldPrice: 45, fileName: 'Electronic Pulse Stimulator.jpg',
        preview: `MegaWise 48 Modes（24 * 2） Dual Channel EMS TENS Unit Muscle Stimulator with
    14Pcs Reusable Electrode Pads. Rechargeable Continuous Mode Electronic Pulse
    Massager with Storage Pouch/Pads Holder`,
        ingredients: `1 Lithium Polymer`,
        about: `<li>7*24 Live Chat Support: FREE upgrade to FULL-Replacement Guarantee-no need to return. We treat
    you like family and want you to be happy! If you are not satisfied, we simply refund your money.
</li>
<li>GET IMMEDIATE PAIN RELIEF WITH 24 CHOICES AND 20 LEVEL INTENSITY: Reduce pain and muscle spasms
    caused by a wide range of conditions including arthritis, period pain, knee pain, neck pain,
    back pain, sports injuries.</li>
<li>A/B DUAL INDEPENDENT CHANNELS Control 2pcs/4pcs/6pcs TENS unit pads for targeted pain relief:
    You can set separate modes and intensities for channel A and channel B. 10pcs & Different
    Size:Stick pads on anywhere as you need.</li>
<li>Built-in Powerful Rechargeable Lithium Battery&Conveniently Pocket-sized.Up to 20 Hours of
    Continuous Use. It can be connected to the wall charger, power bank or laptop USB port to
    charge.</li>
<li>NOTE: Refer User Manual Before Use. Before turn on the TENS unti, please make sure the pads are
    sticked on your treatment area first.</li>`,
        note: `Products with electrical plugs are designed for use in the US. Outlets and voltage
    differ internationally and this product may require an adapter or converter for use in your
    destination. Please check compatibility before purchasing.`,
        details: `<LI>Package Dimensions : 6.26 x 3.66 x 3.11 inches; 12.63 Ounces</LI>
    <LI>Item model number : AS1080</LI>
    <LI>Batteries : 1 Lithium Polymer batteries required. (included)</LI>
    <LI>Date First Available : August 10, 2020</LI>
    <LI>Manufacturer : MegaWise</LI>
    <LI>ASIN : B08FHZ25D1</LI>
    <LI>Country of Origin : China</LI>`,
        container: `helping`

    },
    {
        name: 'Neck Massager', price: 48, oldPrice: 52, fileName: 'Neck Massager.webp',
        preview: `Homedics Rechargeable Neck Massager with Heat, Deep-Kneading Shiatsu Massage,
    Comfort-Flex Handles, Integrated Controls, Cordless, Relaxes Muscle Tension,
    Releases Sore Muscles`,
        ingredients: `Battery Powered`,
        about: `<li>Homedics Massage: Deep-kneading shiatsu works out tension and knots; rejuvenates overworked
    muscles; promotes relaxation and well-being</li>
<li>Easy to Use: Flexible handles for proper neck placement and comfort; integrated controls; heat
    therapy at the push of a button</li>
<li>Gentle Heat: Melts away aches, tension, and stress; radiates deep into muscles; releases
    tightness</li>
<li>Take Everywhere: Cordless and rechargeable; great for home or office; use to take periodic
    recharge breaks throughout the day</li>
<li>What’s in the Box: (1) Homedics Shiatsu Rechargeable Neck Massager with Heat, (1) USB Charging
    Cable</li>`,
        note: `Products with electrical plugs are designed for use in the US. Outlets and voltage
    differ internationally and this product may require an adapter or converter for use in your
    destination. Please check compatibility before purchasing.`,
        details: `<li>Product Dimensions : 11.81 x 11.81 x 6.3 inches; 3.06 Pounds</li>
    <li>Item model number : NMS-390</li>
    <li>Date First Available : October 13, 2022</li>
    <li>Manufacturer : Homedics</li>
    <li>ASIN : B0BJ49NNSF</li>
    <li>Country of Origin : China</li>`,
    container: `helping`
},
    {
        name: 'Foot Massager', price: 149, oldPrice: 170, fileName: 'Foot Massager.jpg',
        preview: `HoMedics Air 2.0 Foot Massager with Soothing Heat and Rhythmic Air
        Compression, 3 Customized Controls and Intensities, Washable Liner, At-Home
        Kneading Massage Relaxes Feet, 3 Speed Options`,
        ingredients: `Corded Electric`,
        about: `<li>82% Nylon; 18% Spandex</li>
        <li>Deep-Kneading Nodes: Shiatsu massage helps provide pain relief for aching muscles from your
            heels to your toes; choose from 3 speed options: low, medium, and high</li>
        <li>Air Compression Massage: Rhythmic air compression gently squeezes your feet for a relaxing
            experience that feels like a professional massage</li>
        <li>Soothing Heat: Enhance your massage with optional heat that comforts tired muscles; heat can
            only be turned on when massage is activated for your safety</li>
        <li>Removable Washable Lining: Easy to clean and maintain, the washable interior liner keeps your
            massage fresh every time</li>
        <li>What’s in the Box: (1) Shiatsu Air 2.0 Foot Massager with Heat, (1) 2-Year Limited Warranty</li>`,
        note: `Products with electrical plugs are designed for use in the US. Outlets and voltage
        differ internationally and this product may require an adapter or converter for use in your
        destination. Please check compatibility before purchasing.`,
        details: `<li>Is Discontinued By Manufacturer  :  No</li>
        <li>Product Dimensions  :  17.13 x 14.37 x 8.7 inches; 9.03 Pounds</li>
        <li>Item model number  :  FMS-351HJ</li>
        <li>Date First Available  :  August 17, 2018</li>
        <li>Manufacturer  :  Homedics</li>
        <li>ASIN  :  B07GSQJWNL</li>
        <li>Country of Origin  :  China</li>
        <li>Domestic Shipping: Currently, item can be shipped only within the U.S. and to APO/FPO addresses.
            For APO/FPO shipments, please check with the manufacturer regarding warranty and support issues.
        </li>`,
        container: `helping`

    },
    {
        name: 'Handle Massager', price: 69, oldPrice: 99, fileName: 'Handle Massager.webp',
        preview: `HoMedics Massage Gun, Deep Tissue Percussion Massage Gun with 3 Modes 12
        Speed Levels, Portable Handheld Muscle Massage Includes 1 Unique Heating
        Head, 5 Massage Heads and Quiet Brushless Motor`,
        ingredients: `Battery Powered`,
        about: `<li>3 Modes & 12 Speed Levels: For fitness, physiotherapy, or leisure. 4 speed settings for each
        mode. Fitness Mode for athletes and gym-goers in pre- and post-workout sessions; Medical Mode
        for point to point local treatment; Health Mode for leisure and relaxation.</li>
    <li>Powerful Percussive Massage Therapy: 30lbs of stall force and 12mm of stroke length for deep and
        powerful muscle massage. Perfect for getting rid of lactic acid, relieving pain, tension and
        tightness, aiding with recovery, and increasing blood circulation and range of motion.</li>
    <li>2600mAh Long Battery Life: 6-12 continuous hours of use on a single charge. Packed with a
        2600mAh high capacity rechargeable Li-ion battery with constant power output, just like constant
        power supply of top of the range electric vehicles. LCD screen lets you see battery status,
        usage time, speed, and mode.</li>
    <li>Unique Heating Massage Heads: 6 Interchangeable massage heads. One of the massage heads is a
        unique heating head could help you speed up to relieve muscle soreness. Each head is designed
        for targeted treatment of different muscle groups. Made of special composite materials, the
        joint between the gun body and the massage heads is more durable and high-temperature resistant,
        no deformation after high-frequency use.</li>
    <li>Quieter & More Light: This deep tissue massage gun is equipped with a brushless motor (up to
        3200 brush strokes per minute) for quieter operations. Ergonomic design makes the massage gun
        light (2.4 pounds) and easy to grip. Free carrying case to take to the gym, office or elsewhere.
    </li>`,
        note: ``,
        details: `<li>Item Package Dimensions L x W x H : 13.58 x 10.63 x 3.46 inches</li>
        <li>Package Weight : 2.51 Kilograms</li>
        <li>Item Dimensions LxWxH : 10.5 x 3.5 x 14 inches</li>
        <li>Brand Name : Homedics</li>
        <li>Color : Dark Green</li>
        <li>Part Number : 7</li>
        <li>Style : Modern</li>
        <li>ASIN : B0BQ7BGCF9</li>`,
        container: `helping`

    },
    {
        name: 'Sphygmomanometer', price: 79, oldPrice: 99, fileName: 'Sphygmomanometer.webp',
        preview: `VitaGRAM Electronic Blood Pressure Moniter PG-800B11 Home Use`,
        ingredients: `Battery Powered`,
        about: `<li>How to measure: Oscillometric Measurement</li>
        <li>Measurement range: [30-280]mmHg Pluse:[40-199]Beat/min</li>
        <li>Accuracy: Pressure :</li>
        <li>Power: 4 x 1.5V Batteries[LR6 or AA]</li>
        <li>Momory : Single type 90 Memories</li>`,
        note: `Products with electrical plugs are designed for use in the US. Outlets and voltage
        differ internationally and this product may require an adapter or converter for use in your
        destination. Please check compatibility before purchasing.`,
        details: `<li>Is Discontinued By Manufacturer  :  No</li>
        <li>Product Dimensions  :  5.51 x 1.89 x 4.33 inches; 15.87 Ounce</li>
        <li>Date First Available  :  November 8, 2016</li>
        <li>Manufacturer  :  Vita</li>
        <li>ASIN  :  B01MRHDIR7 </li>`,
        container: `helping`

    },
    {
        name: 'Thermometer', price: 21, oldPrice: 29, fileName: 'Thermometer.webp',
        preview: `HoMedics Thermometer for Adults and Kids, Non-Contact Infrared Forehead Thermometer, Fast Accurate Results, High-Fever Alert with 4-in-1 Readings`,
        ingredients: `2 AAA batteries`,
        about: `<li>How to measure: Oscillometric Measurement</li>
        <li>Measurement range: [30-280]mmHg Pluse:[40-199]Beat/min</li>
        <li>Accuracy: Pressure :</li>
        <li>Power: 4 x 1.5V Batteries[LR6 or AA]</li>
        <li>Momory : Single type 90 Memories</li>`,
        note: `Products with electrical plugs are designed for use in the US. Outlets and voltage
        differ internationally and this product may require an adapter or converter for use in your
        destination. Please check compatibility before purchasing.`,
        details: `<li>Product Dimensions  :  3.5 x 1.5 x 5.63 inches; 5.29 Ounces</li>
        <li>Item model number  :  TIE-240</li>
        <li>Batteries  :  2 AAA batteries required.</li>
        <li>Date First Available  :  July 1, 2020</li>
        <li>Manufacturer  :  AmazonUs/HOML9</li>
        <li>ASIN  :  B08CLLPWVM</li>
        <li>Country of Origin  :  China</li>`,
        container: `helping`

    }
]

localStorage.setItem("products", JSON.stringify(productDetail));










