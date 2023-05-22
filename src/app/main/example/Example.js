import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import DemoContent from '@fuse/core/DemoContent';
import Card from "react-bootstrap/Card";

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
        <div className="p-24">
          <h4>{t('TITLE')}</h4>
        </div>
      }
      content={
        <div className="p-10">
          <p style={{fontSize : 10, marginLeft : '80rem' }}>Dashboard Last Saved May 15,2023,7:54:16 AM</p>
          <Card style={{ margin: "1rem" }}>
          <Card.Body>
            <Card.Text>
              <h4>Threat Landscape</h4>
            </Card.Text>
          </Card.Body>
          </Card>
          
          <br />
          <DemoContent />
        </div>
      }
      scroll="content"
    />
  );
}

export default ExamplePage;
