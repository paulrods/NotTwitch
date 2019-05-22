import styled from "styled-components";
import { Menu } from "semantic-ui-react";

export const StyledMenu = styled(Menu)`
  font-size: 1.5rem !important;
  border: 0 !important;
  max-height: 38px;

    @media (max-width: 480px) { 
      display: grid;
      grid: 36px / 1fr 1fr;
      grid-gap: 1rem;
  }

  @media (max-width: 660px) { 
      font-size: 1.2rem !important;
  }
    > div {
      font-size: 1.5rem !important;
           border: 0 !important;
            @media (max-width: 660px) { 
            font-size: 1.2rem !important;
         }
      > input {
            border: 0 !important;
        
         @media (max-width: 660px) { 
            font-size: 1.2rem !important;
         }
      }
    }
  }
`;
