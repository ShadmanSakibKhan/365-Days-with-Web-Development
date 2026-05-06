tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Noto Sans Bengali"', 'sans-serif'],
                        serif: ['"Noto Serif Bengali"', 'serif'],
                    },
                    colors: {
                        brand: {
                            dark: '#2C363F', // Charcoal/Slate for artistic contrast
                            light: '#E5D9C5', // Warm Beige
                            gold: '#C05A3E', // Terracotta / Earthy clay
                            bg: '#FDFBF7' // Very light warm cream
                        }
                    }
                }
            }
        }
        
        // Mobile menu toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Navbar background opacity on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
                nav.classList.remove('bg-brand-bg/90', 'shadow-sm');
                nav.classList.add('bg-white');
            } else {
                nav.classList.remove('shadow-md', 'bg-white');
                nav.classList.add('bg-brand-bg/90', 'shadow-sm');
            }
        });