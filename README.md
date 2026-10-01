# THAI UR Website v2.1 — Bilingual Demo

เวอร์ชันนี้เพิ่มระบบสองภาษา TH / EN โดยใช้ HTML ชุดเดียวและสลับข้อความด้วย JavaScript

## โครงสร้าง

- `index.html` — หน้าเว็บชุดเดียวสำหรับทั้งไทยและอังกฤษ
- `style.css` — Design เดิม + CSS สำหรับตัวสลับภาษา
- `script.js` — Logic, rendering, language switching, search/filter, Google Maps links
- `lang/th.js` — เนื้อหาภาษาไทย
- `lang/en.js` — เนื้อหาภาษาอังกฤษ
- `assets/` — รูปภาพทั้งหมด

## วิธีใช้งาน

เปิด `index.html` ผ่าน Live Server ตามปกติ

ที่ Header จะมี `TH / EN` สำหรับสลับภาษา

ภาษาที่เลือกจะถูกเก็บใน `localStorage` ดังนั้นเปิดเว็บครั้งต่อไปจะจำภาษาที่เลือกไว้

## หมายเหตุ

ชื่อและที่อยู่ภาษาอังกฤษใน `script.js` เป็นข้อความตัวอย่างเพื่อจัดวางระบบสองภาษา ควรตรวจทาน/ยืนยันชื่อทางการและที่อยู่ภาษาอังกฤษก่อน Production

Lucide Icons และ Google Fonts ยังโหลดจาก CDN จึงต้องมีอินเทอร์เน็ตขณะเปิด Demo
