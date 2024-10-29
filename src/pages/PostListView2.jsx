import React, { useState } from "react";
import "./css/style2.css";
import { LinearMessages } from "../components/LinearMessages";
import { LinearMapLocationPointOnMap } from "../icons/LinearMapLocationPointOnMap";
import { Container, Grid, Checkbox,  } from '@mui/material';
import CheckBoxGroup from "../components/CheckBoxGroup";

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
              <div className="select-text-1">Pin Color 조절</div>

              <div className="select-text-2">Pin Color 조절</div>
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
                <div className="show-map-btn">
                  <LinearMapLocationPointOnMap className="linear-map-location" />
                  <div className="show-map-text">지도로 보기</div>
                </div>

                <div className="divider" />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="filter-title">필터</div>

                  <button className="filter-reset-btn">
                    <div className="filter-reset-text">필터초기화</div>
                  </button>
                </div>

                <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="맛집명 검색" 
                  /> 

                <div>
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between'}}>
                    <div className="filter-title">인증</div>
                  </div>
                  <CheckBoxGroup labels={['전체', '인증', '미인증']} />
          
                </div>  

                <div className="divider" />

                 <div>
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between'}}>
                    <div className="filter-title">pin 색상</div>
                  </div>
                  <CheckBoxGroup labels={['전체', 'Black', 'Red', 'Orange', 'Blue', 'Yellow', 'Purple']} />

                </div>  

                <div className="divider" />

                 <div>
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between'}}>
                    <div className="filter-title">나의 감정</div>
                  </div>
                  <CheckBoxGroup labels={['전체', '평온', '행복', '사랑', '호기심', '스트레스', '귀찮음']} />

                </div>  

                <div className="divider" />

                 <div>
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between'}}>
                    <div className="filter-title">찾는 주제</div>
                  </div>
                  <CheckBoxGroup labels={['전체', '가을', '제주', '데이트', '캠핑', '가성비', '미슐랭']} />

                </div>  

                <div className="divider" />

                <div className="pin-info">
                  <p className="amadda-pin-color-pin">
                    Amadda pin color는 해당 위치의 맛집에
                    회원들이 pin을 꽂은 개수로 판단하였습니다.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px'}}>
                    <div style={{ display: 'flex'}}>
                      <div className="pin-color-text-1" style={{ color: '#000000'}}>Black</div>
                      <div className="pin-color-text-2">50회 미만</div>
                    </div>
                    <div style={{ display: 'flex'}}>
                      <div className="pin-color-text-1" style={{ color: '#ff0000'}}>Red</div>
                      <div className="pin-color-text-2">50회 이상</div>
                    </div>
                    <div style={{ display: 'flex'}}>
                      <div className="pin-color-text-1" style={{ color: '#ff5d00'}}>Orange</div>
                      <div className="pin-color-text-2">100회 이상</div>
                    </div>
                    <div style={{ display: 'flex'}}>
                      <div className="pin-color-text-1" style={{ color: '#003dff'}}>Blue</div>
                      <div className="pin-color-text-2">200회 이상</div>
                    </div>
                    <div style={{ display: 'flex'}}>
                      <div className="pin-color-text-1" style={{ color: '#f1dd00'}}>Yellow</div>
                      <div className="pin-color-text-2">300회 이상</div>
                    </div>
                    <div style={{ display: 'flex'}}>
                      <div className="pin-color-text-1" style={{ color: '#d400ff'}}>Purple</div>
                      <div className="pin-color-text-2">400회 이상</div>
                    </div>
                  </div>
                  

   
                </div>


              </div>
            </Grid>

            <Grid item xs={12} md={9} lg={9}>
              <div className="post-list-area">
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                  <div className="post-count-text">총 OO개 맛집</div>
                  <div className="navbar">
                    <button className="button-6">추천순</button>

                    <button className="button-7">댓글수 많은순</button>

                    <button className="button-8">댓글수 낮은순</button>

                    <button className="button-9">최신순</button>
                  </div>
                </div>

                

              </div>
            </Grid>
          </Grid>
        </Container>
      
      </div>

      

    </div>
  );
};