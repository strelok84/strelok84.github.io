import React from 'react';

function CommentBlock(){
    return(
        <section className="about">
            <p>Тратата</p>
            <input type="checkbox" id="hd-3" className="hide"/>
            
                <label for="hd-3" >Комментарии</label>
		        <div id="sigCommentsBlock"></div>
                <script type="text/javascript" async>
                    {(function(){
                        let host_id = '3719';
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.async = true;
                        script.src = '//sigcomments.com/chat/?host_id='+host_id;
                        var ss = document.getElementsByTagName('script')[0]; 
                        ss.parentNode.insertBefore(script, ss);
                    })()};
                </script>
                
        </section>
    )
}

export default CommentBlock;