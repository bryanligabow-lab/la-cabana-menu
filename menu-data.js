// ==========================================================
// La Cabaña Mar & Grill — Datos del menú
// ==========================================================
window.MENU = {
  grill: {
    label: "🔥 Grill",
    tagline: "Sabor que se asa, momentos que quedan.",
    categories: [
      {
        id: "moro-chicloso",
        name: "Moro Chicloso",
        note: "Elegir moro de lenteja o choclo",
        items: [
          { name: "Moro + Pollo", price: 7.00 },
          { name: "Moro + Carne", price: 7.00 },
          { name: "Moro + Chorizo", price: 7.00 },
          { name: "Moro + Chuleta", price: 8.00 },
          { name: "Moro + Costilla BBQ", price: 10.00, badge: "star" },
          { name: "Costilla BBQ + Papas Fritas", price: 10.00, badge: "hot" },
          { name: "Milanesa de Pollo", price: 9.00, desc: "Con papas o con moro" }
        ]
      },
      {
        id: "doble-moro",
        name: "Doble Moro Chicloso",
        note: "Doble porción de moro chicloso",
        items: [
          { name: "Doble Moro + Pollo", price: 10.00 },
          { name: "Doble Moro + Carne", price: 10.00 },
          { name: "Doble Moro + Chorizo", price: 10.00 },
          { name: "Doble Moro + Chuleta", price: 10.00 },
          { name: "Doble Moro + Costilla BBQ", price: 12.00, badge: "star" }
        ]
      },
      {
        id: "asados",
        name: "Asados Normales",
        note: "Acompañados de arroz y menestra",
        items: [
          { name: "Pollo + Arroz + Menestra", price: 5.00 },
          { name: "Carne + Arroz + Menestra", price: 5.00 },
          { name: "Chuleta + Arroz + Menestra", price: 6.00 },
          { name: "Mixto 2 Carnes (Pollo, Carne)", price: 7.50, badge: "star" }
        ]
      },
      {
        id: "picaditas",
        name: "Picaditas Bélicas",
        note: "Para compartir, con yuca y maduro frito",
        items: [
          { name: "Pollo + Yuca + Maduro Frito", price: 5.50 },
          { name: "Carne + Yuca + Maduro Frito", price: 5.50 },
          { name: "Chuleta + Yuca + Maduro Frito", price: 6.00 },
          { name: "Mixto 2 Carnes (Pollo, Carne)", price: 7.50 },
          { name: "Mixto 3 Carnes (Pollo, Carne, Chuleta)", price: 10.00, badge: "hot" }
        ]
      }
    ]
  },

  mar: {
    label: "🦐 Mar",
    tagline: "Mariscos frescos del Pacífico.",
    categories: [
      {
        id: "arroz-marinero",
        name: "Arroz Marinero",
        items: [
          { name: "Arroz con Camarón", price: 8.00 },
          { name: "Arroz con Concha", price: 9.00 },
          { name: "Arroz Mixto", price: 12.00, desc: "Camarón y concha" },
          { name: "Arroz Marinero Completo", price: 25.00, desc: "Camarón, concha, pescado, pulpo, calamar y dedos de pescado", badge: "star" }
        ]
      },
      {
        id: "parrilladas",
        name: "Parrilladas de Mariscos",
        items: [
          { name: "Conchas Asadas", price: 14.00, desc: "Patacones, ensalada y salsa de la casa" },
          { name: "Media Parrillada de Mariscos", price: 25.00, desc: "Camarón, pulpo, calamar, conchas, langostinos, pescado, patacones y salsa de la casa" },
          { name: "Completa Parrillada de Mariscos", price: 35.00, desc: "Camarón, pulpo, calamar, conchas, langostinos, pescado, patacones y salsa de la casa (3 a 4 personas)", badge: "group" }
        ]
      },
      {
        id: "camarones-reventados",
        name: "Camarones Reventados",
        items: [
          { name: "Camarones Reventados", price: 8.00, desc: "Deditos de verde, ensalada y salsa de la casa" },
          { name: "Picudo Apanado con Moro", price: 15.00, desc: "Moro de lenteja o choclo, ensalada y salsa de la casa", badge: "star" },
          { name: "½ Libra de Camarón Reventado (Verde)", price: 8.00, desc: "Deditos de verde, ensalada y salsa de la casa" },
          { name: "½ Libra de Camarón Reventado (Menestra)", price: 8.00, desc: "Arroz, menestra, ensalada, patacones y salsa de la casa" },
          { name: "Camarón Reventado (Mixto)", price: 8.00, desc: "Deditos de pescado + deditos de verde" },
          { name: "Camarón Reventado + Moro", price: 9.00, desc: "Camarón reventado con moro de lenteja o choclo" },
          { name: "Camarones de Verde", price: 12.00, desc: "12 porciones: 4 camarón, 4 guacamole, 4 queso", badge: "group" }
        ]
      }
    ]
  },

  porciones: {
    label: "🍟 Porciones",
    tagline: "Acompañantes perfectos.",
    categories: [
      {
        id: "extras",
        name: "Extras",
        items: [
          { name: "Yuca Frita", price: 2.00 },
          { name: "Patacones", price: 2.00 },
          { name: "Papas Fritas", price: 2.50 },
          { name: "Arroz Moro", price: 3.50 }
        ]
      }
    ]
  },

  bebidas: {
    label: "🥤 Bebidas",
    tagline: "Para refrescar y celebrar.",
    categories: [
      {
        id: "bebidas",
        name: "Bebidas",
        items: [
          { name: "Gaseosa Personal", price: 0.75 },
          { name: "Agua", price: 0.75 },
          { name: "Fuze Tea Personal", price: 1.00 },
          { name: "Gaseosa Litro ¼", price: 2.00 },
          { name: "Guitig", price: 2.00 },
          { name: "Fuze Tea Litro", price: 2.00 },
          { name: "Jarra Limón", price: 3.50 },
          { name: "Jarra Maracuyá", price: 4.50 },
          { name: "Jarra Naranjilla", price: 4.50 },
          { name: "Jarra Limonada Rosa", price: 5.00, badge: "star" }
        ]
      },
      {
        id: "micheladas",
        name: "Micheladas",
        items: [
          { name: "Michelada Limón", price: 4.00 },
          { name: "Michelada Maracuyá", price: 4.50, badge: "star" }
        ]
      },
      {
        id: "cerveza",
        name: "Cerveza",
        items: [
          { name: "Club Verde", price: 2.75 },
          { name: "Corona", price: 3.00 }
        ]
      }
    ]
  }
};
