/**
 * loading 公共JS
 * @author RZT-杨正炳
 * @since 2018-03-22
 */
//window.LOADING = {};
window.LOADING = {
	loadingOne: {
		loading: $('<div id="loadingDiv" style="position:fixed;left:0;width:100%;height:100%;top:0;background:rgba(153, 153, 153, .6);opacity:0.8;filter:alpha(opacity=80);z-index:999999;">'+
						'<div style="position: absolute;top: calc(50% - 4.5em);left: calc(0% - 0em);width:100%;height:4.5em;background: transparent;padding: 2.25em 0;">'+
							'<div style="position: relative;width:4.5em;height:4.5em;margin:0 auto;">'+
								'<div class="loader" style="position:absolute;width:0.25em;height:0.25em;top: calc(100% - 2.25em);left: calc(100% - 2.25em);"></div>'+
							'</div>'+
							'<span id="loadingName" style="display:block;color:#008000;font-size:20px;text-align:center;padding:10px 25%;font-weight: 600;">加载中...</span>'+
						'</div>'+
						'<style>'+
							'.loader{'+
								'box-shadow: 0.70711em 0.70711em 0 0em #2ecc71, -0.70711em 0.70711em 0 0.17678em #9b59b6, -0.70711em -0.70711em 0 0.25em #3498db, 0.70711em -0.70711em 0 0.17678em #f1c40f;'+
								'animation: gw 1s ease-in-out infinite, rot 2.8s linear infinite;'+
							'}'+
							'@-webkit-keyframes rot {'+
								'to {transform: rotate(360deg);}'+
							'}'+
	    					'@-webkit-keyframes gw {'+
								'0% {box-shadow: 0.70711em 0.70711em 0 0.125em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.5em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
								'25% {box-shadow: 0.70711em 0.70711em 0 0.39017em #2ecc71, -0.70711em 0.70711em 0 0.5em #9b59b6, -0.70711em -0.70711em 0 0.39017em #3498db, 0.70711em -0.70711em 0 0.125em #f1c40f;}'+
								'50% {box-shadow: 0.70711em 0.70711em 0 0.5em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.125em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
								'75% {box-shadow: 0.70711em 0.70711em 0 0.39017em #2ecc71, -0.70711em 0.70711em 0 0.125em #9b59b6, -0.70711em -0.70711em 0 0.39017em #3498db, 0.70711em -0.70711em 0 0.5em #f1c40f;}'+
								'100% {box-shadow: 0.70711em 0.70711em 0 0.125em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.5em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
								'}'+
							'@keyframes rot {'+
							'to {transform: rotate(360deg);}'+
							'}'+
								'@keyframes gw {'+
							'0% {box-shadow: 0.70711em 0.70711em 0 0.125em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.5em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
							'25% {box-shadow: 0.70711em 0.70711em 0 0.39017em #2ecc71, -0.70711em 0.70711em 0 0.5em #9b59b6, -0.70711em -0.70711em 0 0.39017em #3498db, 0.70711em -0.70711em 0 0.125em #f1c40f;}'+
							'50% {box-shadow: 0.70711em 0.70711em 0 0.5em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.125em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
							'75% {box-shadow: 0.70711em 0.70711em 0 0.39017em #2ecc71, -0.70711em 0.70711em 0 0.125em #9b59b6, -0.70711em -0.70711em 0 0.39017em #3498db, 0.70711em -0.70711em 0 0.5em #f1c40f;}'+
							'100% {box-shadow: 0.70711em 0.70711em 0 0.125em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.5em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
							'}'+
						'</style>'+
					'</div>')
	},
	loadingTwo: {
		loading: $('<div id="loadingDiv" style="position:fixed;left:0;width:100%;height:100%;top:0;background:transparent;opacity:0.8;filter:alpha(opacity=80);z-index:10000;">'+
						'<div style="position: absolute;top: calc(50% - 4.5em);left: calc(50% - 4.5em);width:10.5em;height:10.5em;background: rgba(153, 153, 153, .5);padding: 2.25em 0;">'+
							'<div style="position: relative;width:4.5em;height:4.5em;margin:0 auto;">'+
								'<div class="loader" style="position:absolute;width:0.25em;height:0.25em;top: calc(100% - 2.25em);left: calc(100% - 2.25em);"></div>'+
							'</div>'+
							'<span id="loadingName" style="display:block;width:100%;color:#7a6328;font-size:20px;text-align:center;padding:10px 0;font-weight: 600;">加载中...</span>'+
						'</div>'+
						'<style>'+
							'.loader{'+
								'box-shadow: 0.70711em 0.70711em 0 0em #2ecc71, -0.70711em 0.70711em 0 0.17678em #9b59b6, -0.70711em -0.70711em 0 0.25em #3498db, 0.70711em -0.70711em 0 0.17678em #f1c40f;'+
								'animation: gw 1s ease-in-out infinite, rot 2.8s linear infinite;'+
							'}'+
							'@-webkit-keyframes rot {'+
								'to {transform: rotate(360deg);}'+
							'}'+
	    					'@-webkit-keyframes gw {'+
								'0% {box-shadow: 0.70711em 0.70711em 0 0.125em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.5em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
								'25% {box-shadow: 0.70711em 0.70711em 0 0.39017em #2ecc71, -0.70711em 0.70711em 0 0.5em #9b59b6, -0.70711em -0.70711em 0 0.39017em #3498db, 0.70711em -0.70711em 0 0.125em #f1c40f;}'+
								'50% {box-shadow: 0.70711em 0.70711em 0 0.5em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.125em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
								'75% {box-shadow: 0.70711em 0.70711em 0 0.39017em #2ecc71, -0.70711em 0.70711em 0 0.125em #9b59b6, -0.70711em -0.70711em 0 0.39017em #3498db, 0.70711em -0.70711em 0 0.5em #f1c40f;}'+
								'100% {box-shadow: 0.70711em 0.70711em 0 0.125em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.5em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
								'}'+
							'@keyframes rot {'+
							'to {transform: rotate(360deg);}'+
							'}'+
								'@keyframes gw {'+
							'0% {box-shadow: 0.70711em 0.70711em 0 0.125em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.5em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
							'25% {box-shadow: 0.70711em 0.70711em 0 0.39017em #2ecc71, -0.70711em 0.70711em 0 0.5em #9b59b6, -0.70711em -0.70711em 0 0.39017em #3498db, 0.70711em -0.70711em 0 0.125em #f1c40f;}'+
							'50% {box-shadow: 0.70711em 0.70711em 0 0.5em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.125em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
							'75% {box-shadow: 0.70711em 0.70711em 0 0.39017em #2ecc71, -0.70711em 0.70711em 0 0.125em #9b59b6, -0.70711em -0.70711em 0 0.39017em #3498db, 0.70711em -0.70711em 0 0.5em #f1c40f;}'+
							'100% {box-shadow: 0.70711em 0.70711em 0 0.125em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.5em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
							'}'+
						'</style>'+
					'</div>')
						
	}
};