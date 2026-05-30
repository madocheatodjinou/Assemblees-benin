#!/bin/bash
# Script de téléchargement de toutes les images du projet
# Lancer depuis la racine du projet : bash telecharger-images.sh

mkdir -p img

echo "Téléchargement des images en cours..."

# ── HERO (grandes images 1920px) ─────────────────────────
curl -L "https://images.unsplash.com/photo-1438232992991-995b671a1736?q=80&w=1920" -o img/hero-1.jpg
curl -L "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1920" -o img/hero-2.jpg
curl -L "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1920" -o img/hero-3.jpg
curl -L "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1920" -o img/hero-4.jpg

# ── ABOUT ────────────────────────────────────────────────
curl -L "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470" -o img/about-main.jpg
curl -L "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800"  -o img/about-sec.jpg

# ── ACTIVITÉS ────────────────────────────────────────────
curl -L "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?q=80&w=800" -o img/act-culte.jpg
curl -L "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800" -o img/act-etude.jpg
# act-jeunesse.webp est déjà présent (votre photo locale)
curl -L "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800"   -o img/act-familles.jpg

# ── CARDS ASSEMBLÉES ─────────────────────────────────────
curl -L "https://images.unsplash.com/photo-1519491051250-b2ef9dde6426?q=80&w=800" -o img/card-1.jpg
curl -L "https://images.unsplash.com/photo-1548625149-720753df1f02?q=80&w=800"    -o img/card-2.jpg
curl -L "https://images.unsplash.com/photo-1510519133417-240674b8f832?q=80&w=800" -o img/card-3.jpg
curl -L "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800" -o img/card-4.jpg
curl -L "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=800"   -o img/card-5.jpg
curl -L "https://images.unsplash.com/photo-1515162305114-8d3202a8a11d?q=80&w=800" -o img/card-6.jpg
curl -L "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800" -o img/card-7.jpg
curl -L "https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=800" -o img/card-8.jpg

echo ""
echo "✅ Téléchargement terminé ! Voici les fichiers créés :"
ls -lh img/
