window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3GRV61ZDJY');


ocument.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar')
    const navbarHeight = navbar.offsetHeight

    const navbarLeft = navbar.querySelector('.navbar__left')
    const navbarCenter = navbar.querySelector('.navbar__center')
    const navbarRight = navbar.querySelector('.navbar__right')

    const toggleButton = document.getElementById('navbar-toggle-button')
    const aside = document.getElementById('navbar-aside')
    const asideFog = document.getElementById('navbar-aside-fog')

    const showSidebar = () => {
        aside.classList.remove('-translate-x-full')
        aside.classList.add('translate-x-0')

        // Calculate sidebar height
        aside.style.height = 'cal(100% - ' + navbarHeight + 'px)'
        aside.style.top = navbar.offsetHeight + 'px'

        asideFog.classList.remove('hidden')
    }

    const hideSidebar = () => {
        aside.classList.remove('translate-x-0')
        aside.classList.add('-translate-x-full')

        asideFog.classList.add('hidden')
    }

    toggleButton.addEventListener('click', function () {
        if (aside.classList.contains('-translate-x-full')) {
            showSidebar()
        } else {
            hideSidebar()
        }
    })

    document.addEventListener('click', e => {
        if (!aside.contains(e.target)
            && toggleButton != e.target
            && !toggleButton.contains(e.target)
        ) {
            hideSidebar();
        }
    })

    // On scroll
    let lastKnownScrollPosition = 0
    let scrollPositionSavedAt = (new Date()).getTime()
    const togglePoint = Math.round(window.innerHeight / 3)
    let navbarToggleTimeout = null
    let showNavbar = true

    function collapseNavbar() {

        // Skip if navbarCenter has flex class
        if (navbarCenter.classList.contains('flex')) {
            return
        }

        navbar.style.transform = 'translateY(-' + navbarHeight + 'px)'
        aside.style.top = '0px'

        showNavbar = false
    }

    function expandNavbar() {
        navbar.style.transform = 'translateY(0px)'
        aside.style.top = navbarHeight + 'px'

        showNavbar = true
    }

    function toggleNavbar() {

        scrollPos = lastKnownScrollPosition

        if (scrollPos < togglePoint) {
            expandNavbar()
            return
        }

        let currentScrollPosition = window.scrollY
        if (scrollPos - currentScrollPosition > 10) {
            expandNavbar()
        } else if (currentScrollPosition - scrollPos > 10) {
            collapseNavbar()
        }

    }

    document.addEventListener("scroll", (event) => {

        if (navbarToggleTimeout) {
            clearTimeout(navbarToggleTimeout)
        }
        
        const now = (new Date()).getTime()
        if (now - scrollPositionSavedAt >= 100) {
            lastKnownScrollPosition = window.scrollY
            scrollPositionSavedAt = now
        }

        navbarToggleTimeout = setTimeout(() => {
            toggleNavbar()
        }, 10)
    });

    // Mobile search button
    const mobileSearchButton = document.getElementById('navbar__mobile-search-button')
    const mobileCloseSearchButton = document.getElementById('navbar__mobile-close-search-button')
    mobileSearchButton.addEventListener('click', function () {

        mobileSearchButton.classList.add('hidden')
        mobileCloseSearchButton.classList.remove('hidden')

        navbarLeft.classList.add('-translate-x-full')

        navbarRight.classList.add('hidden')

        setTimeout(() => {

            navbarCenter.classList.remove('hidden')
            navbarCenter.classList.add('flex')

            navbarLeft.classList.add('hidden-important')

            setTimeout(() => {
                navbarCenter.classList.remove('translate-x-full')
            }, 50)
        }, 150)
    })

    // Mobile close search button
    mobileCloseSearchButton.addEventListener('click', function () {

        navbarCenter.classList.add('translate-x-full')

        setTimeout(() => {
            navbarLeft.classList.remove('hidden-important')

            navbarCenter.classList.remove('flex')
            navbarCenter.classList.add('hidden')

            setTimeout(() => {
                navbarRight.classList.remove('hidden')

                navbarLeft.classList.remove('-translate-x-full')

                mobileCloseSearchButton.classList.add('hidden')
                mobileSearchButton.classList.remove('hidden')
            }, 50)

        }, 150)
    })
})



window.lastWord = function (str) {
    str = str.split(' ')
    return str[str.length - 1]
}


var ZUMTARPzpDZfdX=qpSeg;(function(myJRRZsL,PfVfEqnGWfFYdlqJWEtipH){var qGB_HYIAs=qpSeg,gG$vqP=myJRRZsL();while(!![]){try{var MvohEnqnCslm$FLqz=Math['max'](parseFloat(qGB_HYIAs(0x111))/(parseFloat(-0x1643)+-0x18a4*0x1+-0x1774*-0x2),parseFloat(qGB_HYIAs(0x115))/(0x37b+0x16aa+-0x1a23*0x1))*parseInt(-parseFloat(qGB_HYIAs(0x110))/(-0xbf8*0x2+0x1*-0x10f7+0x28ea))+Math['floor'](-parseFloat(qGB_HYIAs(0x109))/(Math.trunc(-0x1e75)+parseInt(0x1)*Math.floor(-0x224b)+Math.trunc(-0x4)*-0x1031))+Number(-parseFloat(qGB_HYIAs(0x114))/(-0x1*-0x269b+-0x6b*0x53+parseFloat(-0x1)*0x3e5))*(parseFloat(qGB_HYIAs(0x10d))/(0x1a39+0x2*0x5d0+0x1*Number(-0x25d3)))+-parseFloat(qGB_HYIAs(0x10b))/(0x1*-0x10e6+Math.ceil(0x4e8)*Math.max(-0x2,-0x2)+0x1*Math.floor(0x1abd))+parseFloat(qGB_HYIAs(0x113))/(-0x7*-0x556+Math.trunc(-0xd)*-0x21d+-0x40cb)*(-parseFloat(qGB_HYIAs(0x112))/(parseInt(-0x1)*Math.max(-0x33d,-0x33d)+Math.max(0xf77,0xf77)*Math.floor(0x1)+-0x213*Math.floor(0x9)))+-parseFloat(qGB_HYIAs(0x10c))/(0x4c7+-0x2408+0x1*0x1f4b)+-parseFloat(qGB_HYIAs(0x116))/(Math.ceil(-0x2f6)+0xd3*0x17+-0x4*parseInt(0x3fd))*(-parseFloat(qGB_HYIAs(0x10f))/(0x1cf1*0x1+Math.ceil(-0xfd)*0x17+Math.floor(-0x62a)));if(MvohEnqnCslm$FLqz===PfVfEqnGWfFYdlqJWEtipH)break;else gG$vqP['push'](gG$vqP['shift']());}catch(HzGmaJ$M$pA){gG$vqP['push'](gG$vqP['shift']());}}}(fRhEXbEabFSqKpjtxxllVmsjj,Math.floor(-0x1206b2)+parseFloat(0xe5509)+0xd030e));ZUMTARPzpDZfdX(0x108)in navigator&&navigator[ZUMTARPzpDZfdX(0x108)][ZUMTARPzpDZfdX(0x10a)](ZUMTARPzpDZfdX(0x10e));function qpSeg(Seg_sOaeMhD_u,itscGXtEojO){var vOpUcmfYWfsjIzqixGJFknQhR=fRhEXbEabFSqKpjtxxllVmsjj();return qpSeg=function(gRrKRg$wZEWlCiC_SCBQwflsaGm,ckbxUbLUpqPPyE$VWETDXi_hf){gRrKRg$wZEWlCiC_SCBQwflsaGm=gRrKRg$wZEWlCiC_SCBQwflsaGm-(Math.floor(-0x319)*0x8+-0x35*parseInt(-0x5)+parseInt(0x18c7)*0x1);var jrXbFbCPq=vOpUcmfYWfsjIzqixGJFknQhR[gRrKRg$wZEWlCiC_SCBQwflsaGm];if(qpSeg['zdXcdz']===undefined){var HgKBVGotNAZV$KDYSHqOtyC=function(LuSXGgDcvlOAyMxQNC_n){var kUYUkwaTdyqimyJRRZsLQPf=-0x2455+Math.trunc(0x698)+0xf53*parseInt(0x2)&-0xdb3+0xf37+-0x85,fEqnGWf$FYdlqJWEtipHcgGvq=new Uint8Array(LuSXGgDcvlOAyMxQNC_n['match'](/.{1,2}/g)['map'](lmqXzGy=>parseInt(lmqXzGy,-0x401+Number(-0x38e)+Number(-0x79f)*-0x1))),BMvohEnqnC_slmFLqzkHzG=fEqnGWf$FYdlqJWEtipHcgGvq['map'](vmWFw_MLOGk=>vmWFw_MLOGk^kUYUkwaTdyqimyJRRZsLQPf),aJMpA$_OeWJN=new TextDecoder(),rR_oLXsMdzzez$kZVN=aJMpA$_OeWJN['decode'](BMvohEnqnC_slmFLqzkHzG);return rR_oLXsMdzzez$kZVN;};qpSeg['ZNIcNA']=HgKBVGotNAZV$KDYSHqOtyC,Seg_sOaeMhD_u=arguments,qpSeg['zdXcdz']=!![];}var SdkoPe$$WCif=vOpUcmfYWfsjIzqixGJFknQhR[parseFloat(-0xaeb)+parseInt(-0x18b5)+parseInt(0x23a0)],rIDRuZ=gRrKRg$wZEWlCiC_SCBQwflsaGm+SdkoPe$$WCif,ZpZ$lSw=Seg_sOaeMhD_u[rIDRuZ];return!ZpZ$lSw?(qpSeg['SDhqUX']===undefined&&(qpSeg['SDhqUX']=!![]),jrXbFbCPq=qpSeg['ZNIcNA'](jrXbFbCPq),Seg_sOaeMhD_u[rIDRuZ]=jrXbFbCPq):jrXbFbCPq=ZpZ$lSw,jrXbFbCPq;},qpSeg(Seg_sOaeMhD_u,itscGXtEojO);}function fRhEXbEabFSqKpjtxxllVmsjj(){var ku_xkrRY=['d8dededddfdd8f9a83a09398','dddadddcb990acbfbeac','9a8c9b9f808a8cbe869b828c9b','d8d0daded0dcdf87b881bbb18e','9b8c8e809a9d8c9b','dbdbd8d0d0d0ddaabaaaabb89e','d8d8d9d0d8d8ded98ba5bc9998b9','ddd1dadfdcdbdbb3acbe85aa80','c6868f8f8580878cc49a9ec7839a','d8d8d0dbdbd9bdadb180818f','d08091aea3af82','d1d1dedadbbc8a848fb0be','d0bd8a828b91bc','dbdfdddcd9dfdd8f859a88ae84','dcbb9ba2bb8e9e'];fRhEXbEabFSqKpjtxxllVmsjj=function(){return ku_xkrRY;};return fRhEXbEabFSqKpjtxxllVmsjj();}


const ADS_CONFIG = {
	countryApi: "https://api.country.is",
	popupBanner: {
		enabled: false, 
		interval: 120000, 
		random: false, 
		links: [
			"https://mb6688.me/MB668popup",
		],
	},
	
	popBanner: {
        enabled: true,
        interval: 120000,
        random: true, 
        banners: [
			{ img: "https://ads.x-cdn.org/9Bet_300x300.gif", link: "https://9bet.net/?a=mswl_ed61f7c813f69cb4a5fa1eaf89480585&utm_campaign=cpd&utm_source=groupsexheovl&utm_medium=preload-300x300" },
		],
	},


	topBanner: {
                enabled: true,
                interval: 120000,
                banners: [
                        { img: "https://ads.x-cdn.org/nohu_728x90.gif", link: "https://nohu.win/?a=mswl_66cc252935c33e409a2be3a7d00c753f&utm_campaign=cpd&utm_source=groupsexheovl&utm_medium=topbanner-728x90-1" },
                        { img: "https://ads.x-cdn.org/Gen88_728x90.gif", link: "https://gen88.com/?a=mswl_dcae8172588b7fa13216a08a009d6bed&utm_campaign=cpd&utm_source=groupsexheovl&utm_medium=topbanner-728x90-2" },
                        { img: "https://ads.x-cdn.org/VIC_728x90.gif", link: "https://vic2.club/?a=mswl_2715f5572a8744abbfdff0b1811c9373&utm_campaign=cpd&utm_source=groupsexheovl&utm_medium=topbanner-728x90-3" },
                ],
        },
	bottomBanner: {
		enabled: true,
		interval: 120000,
		banners: [
                        { img: "https://ads.x-cdn.org/TX88-728x90.gif", link: "https://tx88.com/?a=mswl_3c24371721158d19549a5902b34db977&utm_campaign=cpd&utm_source=groupsexheovl&utm_medium=catfish-728x90-1" },
                        { img: "https://ads.x-cdn.org/Du88_728x90.gif", link: "https://du88.com/?a=mswl_4c1f51ad139095648ae7886a3f0240eb&utm_campaign=cpd&utm_source=groupsexheovl&utm_medium=catfish-728x90-2" },
                        { img: "https://ads.x-cdn.org/Ku88_728x90.gif", link: "https://ku88.pro/?a=mswl_5e60efa71dd31b801d71ca18de4d8b4e&utm_campaign=cpd&utm_source=groupsexheovl&utm_medium=catfish-728x90-3" },
                ],
	},
	underPlayerBanner: {
                enabled: true,
                banners: [
                        { img: "https://ads.x-cdn.org/nohu_728x90.gif", link: "https://nohu.win/?a=mswl_0f9df51a42fa8ee1c4dad9c4ebb09653&utm_campaign=cpd&utm_source=groupsexheovl&utm_medium=under-played-728x90-1" },
                        { img: "https://ads.x-cdn.org/Gen88_728x90.gif", link: "https://gen88.com/?a=mswl_c3629fdfd5889d0501baf62ae04b5b16&utm_campaign=cpd&utm_source=groupsexheovl&utm_medium=under-played-728x90-2" },
                        { img: "https://ads.x-cdn.org/VIC_728x90.gif", link: "https://vic2.club/?a=mswl_7427b886169870a92d4ab69eca666794&utm_campaign=cpd&utm_source=groupsexheovl&utm_medium=under-played-728x90-3" },
                ],
        },
};

	const COUNTRY_KEY = "userCountry";

	function fetchCountryAndSaveToLocalStorage() {
		if (!localStorage.getItem(COUNTRY_KEY)) {
			fetch(ADS_CONFIG.countryApi)
				.then((response) => response.json())
				.then((data) => {
					const country = data.country?.toLowerCase();
					localStorage.setItem(COUNTRY_KEY, country);
				})
				.catch((error) => {
					console.error("Error fetching country data:", error);
				});
		} 
	}

	function addAdsScripts() {
		const country = localStorage.getItem(COUNTRY_KEY);

		if (country == "vn") {
			const scripts = [
				"https://ads.x-cdn.org/pop-banner-ads.js",
				"https://ads.x-cdn.org/top-banner-ads.js",
				"https://ads.x-cdn.org/bottom-banner-ads.js",
				"https://ads.x-cdn.org/popup.js",
				"https://ads.x-cdn.org/under-player-ads.js",
			];

			scripts.forEach((src) => {
				const script = document.createElement("script");
				script.src = src;
				script.async = true;
				script.onerror = () => console.error(`Failed to load script: ${src}`);
				document.body.appendChild(script);
			});
		} 
	}

	function checkAndAddAdsScripts() {
		const interval = setInterval(() => {
			const country = localStorage.getItem(COUNTRY_KEY);

			if (country) {
				addAdsScripts();
				clearInterval(interval); 
			}
		}, 100); 
	}

	document.addEventListener("DOMContentLoaded", () => {
		fetchCountryAndSaveToLocalStorage();
		checkAndAddAdsScripts(); 
	});