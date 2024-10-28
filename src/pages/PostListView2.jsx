import React from "react";
import "./css/style2.css";
import { LinearMessages } from "../components/LinearMessages";
import { LinearMapLocationPointOnMap } from "../icons/LinearMapLocationPointOnMap";
import { Container, Grid } from '@mui/material';

export const PostListView2 = () => {
  return (
    <div className="post-list-view">
      <div className="search-area">
        <div className="tabpanel-container">
          <div className="tabpanel">
            <div className="city-select-area">
              <div className="select-text-1">도시명/랜드마크</div>

              <div className="select-text-2">도시명/랜드마크 선택</div>
            </div>

            <div className="hashtag-select-area">
              <div className="select-text-1">해시태그</div>

              <div className="select-text-2">해시태그 선택</div>
            </div>

            <div className="pin-select-area">
              <div className="select-text-1">Pin 색 선택</div>

              <div className="select-text-2">Pin 색 선택</div>
            </div>

            <div className="search-btn-area">
              <div className="search-btn-text">검색</div>  
            </div>
            
          </div>
        </div>
      </div>

      <div className="main-container">
        <Container maxWidth="xl" style={{ marginTop: '30px'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
              <div className="filter-menu-area">
                <div className="button-5">
                  <LinearMapLocationPointOnMap className="linear-map-location" />
                  <div className="text-wrapper-30">지도로 보기</div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={9} lg={9}>
              <div style={{width: '100%', height: '100', backgroundColor: 'blue'}}></div>
            </Grid>
          </Grid>
        </Container>
      
      </div>

      

    </div>
  );
};
