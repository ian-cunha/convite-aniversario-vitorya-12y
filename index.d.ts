// index.d.ts

declare module '*.jpeg' {
    const src: string;
    export default src;
  }
  
  declare module '*.jpg' {
    const src: string;
    export default src;
  }
  
  declare module '*.png' {
    const src: string;
    export default src;
  }
  
  declare module '*.svg' {
    const src: string;
    export default src;
  }
  
  // Interface de tipos para props de componentes
  declare namespace React {
    interface CSSProperties {
      // Adicione aqui outras propriedades CSS personalizadas se necessário
      textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit' | string; // Exemplo para textAlign
    }
  
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // Exemplo de adição de propriedades customizadas
      style?: CSSProperties;
    }
  }
  
  // Exemplo de declarações para um componente personalizado
  declare module 'MeuComponente' {
    import React from 'react';
  
    interface MeuComponenteProps {
      title: string;
      description: string;
      style?: React.CSSProperties;
    }
  
    export const MeuComponente: React.FC<MeuComponenteProps>;
  }
  