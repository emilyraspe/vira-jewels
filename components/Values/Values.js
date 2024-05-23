import React, { useRef } from "react";

export default function Values({ valuesRef }) {
  return (
    <div ref={valuesRef} className="content--container">
      <p id="werte" className="tagline">
        Unsere Werte
      </p>
      <h2>Vira Jewels: Ein Schmuckstück, das Ihre Geschichte erzählt</h2>
      <p className="copy">
        Jedes Schmuckstück von Vira Jewels ist ein Versprechen. Ein Versprechen
        von Khushi an Sie. Wenn Sie Vira Jewels tragen, tragen Sie nicht nur ein
        Schmuckstück, sondern auch die Liebe, Sorgfalt und das Handwerk, das in
        jedes Detail fließt. Vira Jewels ist nicht nur ein Schmuckstück; es ist
        ein Gefühl. Ein Gefühl von Zugehörigkeit, Geschichte und Stolz. Khushi
        Kotahwala hat mit Vira Jewels nicht nur eine Marke geschaffen, sondern
        auch eine Familie – und Sie sind herzlich eingeladen, Teil dieser
        Familie zu werden. Lassen Sie sich verzaubern von der Welt von Vira
        Jewels. Entdecken Sie Schmuck, der nicht nur glänzt, sondern auch
        Geschichten erzählt. Ihre Geschichte.
      </p>
      <h3>Unsere Top 3 Werte</h3>
      <div className="werte--container">
        <h4>Unvergleichliche Qualität</h4>
        <p>
          Unsere Preziosen werden mit viel Liebe und höchster Handwerkskunst aus
          925er Silber in verschiedenen Veredelungen handgefertigt. Als Besatz
          verwenden wir ausschließlich nur echte Edelsteine und/oder Diamanten.
          Die verwendeten Edelsteine überzeugen durch ihr Feuer, ihre
          Transparenz und dem hochfeinen Schliff. Unser Ziel ist es, mit Hilfe
          unseres Expertenteams aus erfahrenen Edelsteinschleifern,
          Schmuck-designern und Juwelieren, unseren Kunden nur Schmuck von
          höchster Qualität zu präsentieren.
        </p>
      </div>

      <div className="werte--container">
        <h4>Äußerst zuverlässig</h4>
        <p>
          Die Leidenschaft und Begeisterung für das Edelsteinschleifen, den
          Edelsteinhandel und die Schmuckherstellung wurde über viele
          Generationen weitergegeben und daher können Sie sich bei jedem
          Schmuckstück auf Exzellenz verlassen. Wir kümmern uns um die Details,
          damit Sie Ihren Schmuck mit Stolz tragen können.
        </p>
      </div>

      <div className="werte--container">
        <h4>Für jeden erschwinglich</h4>
        <p>
          Echter Schmuck sollte für jeden zugänglich sein. Mit faszinierenden
          Edelsteinen in verschiedenen Farben, Formen und Größen können wir
          Farbe und Freude in den Alltag bringen. Echtschmuck muss nicht nur zu
          besonderen Anlässen getragen werden. Vira Jewels macht das möglich und
          bietet ein unschlagbares Preisleistungsverhältnis.
        </p>
      </div>
    </div>
  );
}
