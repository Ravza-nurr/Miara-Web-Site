"use client";

import { MoonIcon, SunIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Sayfa yüklendiğinde localStorage'dan tema durumunu al
    useEffect(() => {
        const savedTheme = localStorage.getItem('miara-theme') as 'light' | 'dark' | null;
        if (savedTheme) {
            setTheme(savedTheme);
            applyTheme(savedTheme);
        } else {
            // Sistem temasını kontrol et
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const defaultTheme = prefersDark ? 'dark' : 'light';
            setTheme(defaultTheme);
            applyTheme(defaultTheme);
        }
    }, []);

    // Temayı uygula
    const applyTheme = (newTheme: 'light' | 'dark') => {
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('miara-theme', newTheme);
    };

    // Tema değiştirme fonksiyonu
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg cursor-pointer bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-hover-secondary)] transition-colors duration-200"
            aria-label={theme === 'light' ? 'Koyu temaya geç' : 'Açık temaya geç'}
        >
            {theme === 'light' ? (
                <MoonIcon className="w-5 h-5 text-[var(--color-text-primary)]" />
            ) : (
                <SunIcon className="w-5 h-5 text-[var(--color-text-primary)]" />
            )}
        </button>
    )
}

export default ThemeToggle
