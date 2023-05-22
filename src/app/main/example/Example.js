import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import DemoContent from '@fuse/core/DemoContent';
import Card from "react-bootstrap/Card";
import Dropdowns from 'app/theme-layouts/shared-components/Dropdown';
import ControlDropdown from './i18n/ControlDropdown';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function ExamplePage(props) {
  const { t } = useTranslation('examplePage');

  return (
    <Root
      header={
        <>
          <div className="p-10" style={{display:"flex" ,justifyContent:"space-between"}}>
            <h4>{t('TITLE')}</h4>
            <ControlDropdown />
          </div>
          <div>
          </div>
        </>
      }
      content={
        <div className="p-10">
          {/* <p style={{fontSize : 10, marginLeft : '80rem' }}>Dashboard Last Saved May 15,2023,7:54:16 AM</p> */}
          <Card style={{ margin: "1rem" }}>
            <Card.Body>
              <Card.Text>
                <h4>Threat Landscape</h4>
              </Card.Text>
            </Card.Body>
          </Card>

          <DemoContent />
        </div>
      }
      scroll="content"
    />
  );
}

export default ExamplePage;
