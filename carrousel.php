<?php
    /**
     * Plugin Name: Carrousel
     * Author: Camilia El Moustarih
     * Description: Affiche le carrousel associé à une galerie de WordPress
     * Version 1.0.0
     * Plugin URI: https://e0958030.github.io/4w4-2024/
     * Author URI: https://e0958030.github.io/4w4-2024/
     */

    // function enqueue_style_script(){
    //     $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
    //     $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    //     wp_enqueue_style(   'em_plugin_carrousel_css',
    //                     plugin_dir_url(__FILE__) . "style.css",
    //                     array(),
    //                     $version_css);

    //     wp_enqueue_script(  'em_plugin_carrousel_js',
    //                     plugin_dir_url(__FILE__) ."js/carrousel.js",
    //                     array(),
    //                     $version_js,
    //                     true);
    // }

    // add_action('wp_enqueue_scripts', 'enqueue_style_script');


    // function genere_html(){

    //     $html = '
    //     <button class="bouton_ouvrir">Ouvrir Carrousel</button>
    //     <div class="carrousel">
    //         <a href="" class="carrousel__x">X</a>
    //         <figure class="carrousel__figure"></figure>
    //         <form action="" class="carrousel__form"></form>
    //     </div>
    //     ';
    //     return $html;
    // }

    // add_shortcode('carrousel', 'genere_html');
    

    
    
     function enqueue_style_script(){
        $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
        $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");
    
        wp_enqueue_style(   'em_plugin_carrousel_css',
                         plugin_dir_url(__FILE__) . "style.css",
                         array(),
                         $version_css);
    
        wp_enqueue_script(  'em_plugin_carrousel_js',
                        plugin_dir_url(__FILE__) ."js/carrousel.js",
                        array(),
                        $version_js,
                        true);
    
     }
    
    //  Il faut que wp_head soit inclut juste avant la balise </head>
    // Et que wp_footer soit ajouté aussi juste avant la base </body>
     add_action('wp_enqueue_scripts','enqueue_style_script');
    
    
    
    function genere_html(){
    
    
    
        $html = '
        <button class="bouton__ouvrir">Ouvrir Carrousel</button>
        <div class="carrousel">
            <button class="carrousel__x">X</button>
            <figure class="carrousel__figure"></figure>
            <form action="" class="carrousel__form"></form>
        </div>
        ';
        return $html;
    }
    
    // [carrousel] juste après la galerie dans votre article ou page
    // Quand la fonction the_content() rencontera [carrousel], le carrousel sera initialisé
    add_shortcode('carrousel', 'genere_html');