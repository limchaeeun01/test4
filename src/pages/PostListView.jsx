import React from "react";
import { LinearMessages } from "../components/LinearMessages";
import { LinearMapLocationPointOnMap } from "../icons/LinearMapLocationPointOnMap";
import "./css/style.css";

export const PostListView = () => {
  return (
    <div className="post-list-view">

      <div className="main">
        <div className="overlap">
          <div className="tabpanel">
            <div className="vertical-border">
              <div className="background-border">
                <div className="label">도시명/랜드마크</div>

                <div className="container-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-6">도시명/랜드마크 선택</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="label-2">해시태그</div>

                <div className="input-2">
                  <div className="div-wrapper">
                    <div className="text-wrapper-6">해시태그 선택</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="background-border-wrapper">
              <div className="button-wrapper">
                <button className="button">
                  <div className="text-wrapper-7">열람 비율 조절</div>

                  <div className="container-2">
                    <div className="text-wrapper-8">열람 비율 조절</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="vertical-border-2">
              <div className="button-wrapper">
                <button className="button-2">
                  <div className="text-wrapper-9">Pin Color 조절</div>

                  <div className="container-3">
                    <div className="text-wrapper-10">Pin Color 조절</div>
                  </div>
                </button>
              </div>
            </div>

            <button className="button-3">
              <img className="image" alt="Image" src="/img/image-1.png" />

              <div className="text-wrapper-11">검색</div>

              <div className="background" />
            </button>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="filter">
            <div className="heading">필터</div>

            <div className="heading-2">인증</div>

            <div className="list">
              <div className="item-label">
                <div className="text-wrapper-12">전체</div>

                <div className="div-3">
                  <div className="border" />
                </div>
              </div>

              <div className="item-label-2">
                <div className="text-wrapper-13">인증</div>

                <div className="div-3" />
              </div>

              <div className="item-label-3">
                <div className="text-wrapper-14">미인증</div>

                <div className="div-3" />
              </div>
            </div>

            <div className="horizontal-divider" />

            <div className="horizontal-divider-2" />

            <div className="heading-3">pin 색 조절</div>

            <div className="pin-color">
              <div className="item-label-4">
                <div className="text-wrapper-15">전체</div>

                <div className="div-3">
                  <div className="border" />
                </div>
              </div>

              <div className="item-label-5">
                <div className="text-wrapper-16">Red</div>

                <div className="div-3" />
              </div>

              <div className="item-label-6">
                <div className="text-wrapper-17">Orange</div>

                <div className="div-3" />
              </div>

              <div className="item-label-7">
                <div className="text-wrapper-18">Yellow</div>

                <div className="div-3" />
              </div>

              <div className="item-label-8">
                <div className="text-wrapper-19">Green</div>

                <div className="div-3" />
              </div>

              <div className="item-label-9">
                <div className="text-wrapper-19">Black</div>

                <div className="div-3" />
              </div>

              <div className="item-label-10">
                <div className="text-wrapper-20">Blue</div>

                <div className="div-3" />
              </div>

              <div className="item-label-11">
                <div className="text-wrapper-18">Purple</div>

                <div className="div-3" />
              </div>
            </div>

            <div className="search-bar">
              <div className="input-3">
                <div className="container-4">
                  <div className="text-wrapper-21">맛집명 검색</div>
                </div>
              </div>
            </div>

            <button className="button-4">
              <div className="text-wrapper-22">필터초기화</div>
            </button>

            <div className="pin-info">
              <p className="amadda-pin-color-pin">
                Amadda pin color는 해당 위치의 맛집에
                <br />
                회원들이 pin을 꽂은 개수로 판단했습니다.
              </p>

              <div className="frame-8">
                <div className="text-wrapper-23">Black</div>

                <div className="text-wrapper-24">50회 미만</div>
              </div>

              <div className="frame-9">
                <div className="text-wrapper-25">Red</div>

                <div className="text-wrapper-24">50회 이상</div>
              </div>

              <div className="frame-10">
                <div className="text-wrapper-26">Orange</div>

                <div className="text-wrapper-24">100회 이상</div>
              </div>

              <div className="frame-11">
                <div className="text-wrapper-27">Blue</div>

                <div className="text-wrapper-24">200회 이상</div>
              </div>

              <div className="frame-12">
                <div className="text-wrapper-28">Yellow</div>

                <div className="text-wrapper-24">300회 이상</div>
              </div>

              <div className="frame-13">
                <div className="text-wrapper-29">Purple</div>

                <div className="text-wrapper-24">400회 이상</div>
              </div>
            </div>

            <div className="map-view">
              <div className="overlap-2">
                <div className="border-2" />

                <div className="button-5">
                  <div className="text-wrapper-30">지도로 보기</div>

                  <LinearMapLocationPointOnMap className="linear-map-location" />
                </div>
              </div>
            </div>

            <div className="heading-4">나의 감정</div>

            <div className="heading-5">찾는 주제</div>

            <div className="pin-color-2">
              <div className="item-label-4">
                <div className="text-wrapper-15">전체</div>

                <div className="div-3">
                  <div className="border" />
                </div>
              </div>

              <div className="item-label-5">
                <div className="text-wrapper-16">행복</div>

                <div className="div-3" />
              </div>

              <div className="item-label-6">
                <div className="text-wrapper-17">호기심</div>

                <div className="div-3" />
              </div>

              <div className="item-label-7">
                <div className="text-wrapper-18">귀찮음</div>

                <div className="div-3" />
              </div>

              <div className="item-label-8">
                <div className="text-wrapper-19">사랑</div>

                <div className="div-3" />
              </div>

              <div className="item-label-9">
                <div className="text-wrapper-19">평온</div>

                <div className="div-3" />
              </div>

              <div className="item-label-10">
                <div className="text-wrapper-17">스트레스</div>

                <div className="div-3" />
              </div>
            </div>

            <div className="pin-color-3">
              <div className="item-label-4">
                <div className="text-wrapper-15">전체</div>

                <div className="div-3">
                  <div className="border" />
                </div>
              </div>

              <div className="item-label-5">
                <div className="text-wrapper-16">제주</div>

                <div className="div-3" />
              </div>

              <div className="item-label-6">
                <div className="text-wrapper-17">캠핑</div>

                <div className="div-3" />
              </div>

              <div className="item-label-7">
                <div className="text-wrapper-18">미슐랭</div>

                <div className="div-3" />
              </div>

              <div className="item-label-8">
                <div className="text-wrapper-19">데이트</div>

                <div className="div-3" />
              </div>

              <div className="item-label-9">
                <div className="text-wrapper-19">가을</div>

                <div className="div-3" />
              </div>

              <div className="item-label-10">
                <div className="text-wrapper-17">가성비</div>

                <div className="div-3" />
              </div>
            </div>

            <div className="horizontal-divider-3" />

            <div className="horizontal-divider-4" />
          </div>
        </div>

        <div className="link">
          <div className="text-wrapper-31">총 OO개 맛집</div>

          <img className="img" alt="Image" src="/img/image.png" />
        </div>

        <div className="navbar">
          <button className="button-6">추천순</button>

          <button className="button-7">댓글수 많은순</button>

          <button className="button-8">댓글수 낮은순</button>

          <button className="button-9">최신순</button>
        </div>

        <div className="frame-14">
          <div className="reading-info">
            <div className="div-4">
              <button className="button-10">
                <div className="text-wrapper-32">상세보기</div>
              </button>

              <div className="user-feeling">
                <div className="button-wrapper-2">
                  <button className="button-11">
                    <div className="text-wrapper-33">작성자 감정</div>
                  </button>
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector.svg"
                        />

                        <div className="text-wrapper-34">평온</div>
                      </div>
                    </div>
                  </div>

                  <img className="korean" alt="Korean" src="/img/korean.svg" />
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector.svg"
                        />

                        <div className="text-wrapper-34">행복</div>
                      </div>
                    </div>
                  </div>

                  <img
                    className="korean"
                    alt="Korean"
                    src="/img/korean-1.svg"
                  />
                </div>
              </div>

              <div className="post-cate">
                <div className="button-wrapper-2">
                  <button className="button-11">
                    <div className="text-wrapper-33">게시물 간략 소개</div>
                  </button>
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector-2.svg"
                        />

                        <div className="text-wrapper-34">가을</div>
                      </div>
                    </div>
                  </div>

                  <div className="korean-2" />
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector-3.svg"
                        />

                        <div className="text-wrapper-34">한식</div>
                      </div>
                    </div>
                  </div>

                  <div className="korean-3" />
                </div>
              </div>
            </div>

            <div className="vertical-border-3">
              <div className="post">
                <div className="frame-wrapper">
                  <div className="frame-15" />
                </div>
              </div>

              <div className="overlap-3">
                <div className="post-info">
                  <div className="frame-16">
                    <div className="background-border-2">
                      <div className="text-wrapper-35">User Badge</div>
                    </div>

                    <div className="background-border-2">
                      <div className="text-wrapper-35">User Badge</div>
                    </div>

                    <div className="background-border-2">
                      <div className="text-wrapper-35">User Badge</div>
                    </div>

                    <div className="background-border-2">
                      <div className="text-wrapper-35">User Badge</div>
                    </div>
                  </div>

                  <div className="user-info">
                    <div className="text-wrapper-36">USER Name</div>

                    <div className="container-5">
                      <div className="container-6">
                        <div className="text-wrapper-37">18</div>

                        <div className="text-wrapper-38">일전 작성</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-wrapper-39">영수증 미인증 게시글</div>

                  <div className="frame-17" />

                  <div className="frame-18">
                    <div className="text-wrapper-40">#가을맛집</div>

                    <div className="text-wrapper-41">#데이트</div>

                    <div className="text-wrapper-42">#전어</div>

                    <div className="text-wrapper-41">#가성비</div>

                    <div className="text-wrapper-43">#웨이팅</div>

                    <div className="text-wrapper-44">#회무침</div>

                    <div className="text-wrapper-45">#사시미</div>
                  </div>

                  <div className="container-7">
                    <button className="button-12">
                      <div className="text-wrapper-46">
                        롯데백화점 부근에 위치
                      </div>
                    </button>
                  </div>
                </div>

                <img className="line" alt="Line" src="/img/line-36.svg" />
              </div>
            </div>
          </div>

          <div className="reading-info-2">
            <div className="overlap-4">
              <img className="vector-2" alt="Vector" src="/img/vector-4.svg" />

              <div className="vertical-border-3">
                <div className="post">
                  <div className="frame-wrapper">
                    <div className="frame-15" />
                  </div>
                </div>

                <div className="overlap-3">
                  <div className="post-info">
                    <div className="frame-16">
                      <div className="background-border-2">
                        <div className="text-wrapper-35">User Badge</div>
                      </div>

                      <div className="background-border-2">
                        <div className="text-wrapper-35">User Badge</div>
                      </div>

                      <div className="background-border-2">
                        <div className="text-wrapper-35">User Badge</div>
                      </div>

                      <div className="background-border-2">
                        <div className="text-wrapper-35">User Badge</div>
                      </div>
                    </div>

                    <div className="user-info">
                      <div className="text-wrapper-36">USER Name</div>

                      <div className="container-5">
                        <div className="container-6">
                          <div className="text-wrapper-37">18</div>

                          <div className="text-wrapper-38">일전 작성</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-wrapper-47">영수증 인증 게시글</div>

                    <div className="frame-17" />

                    <div className="frame-18">
                      <div className="text-wrapper-40">#가을맛집</div>

                      <div className="text-wrapper-41">#데이트</div>

                      <div className="text-wrapper-42">#전어</div>

                      <div className="text-wrapper-41">#가성비</div>

                      <div className="text-wrapper-43">#웨이팅</div>

                      <div className="text-wrapper-44">#회무침</div>

                      <div className="text-wrapper-45">#사시미</div>
                    </div>

                    <div className="container-7">
                      <button className="button-12">
                        <div className="text-wrapper-46">
                          롯데백화점 부근에 위치
                        </div>
                      </button>
                    </div>
                  </div>

                  <img className="line" alt="Line" src="/img/line-36.svg" />
                </div>
              </div>
            </div>

            <div className="div-4">
              <button className="button-10">
                <div className="text-wrapper-32">상세보기</div>
              </button>

              <div className="user-feeling">
                <div className="button-wrapper-2">
                  <button className="button-11">
                    <div className="text-wrapper-33">작성자 감정</div>
                  </button>
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector.svg"
                        />

                        <div className="text-wrapper-34">평온</div>
                      </div>
                    </div>
                  </div>

                  <img className="korean" alt="Korean" src="/img/korean.svg" />
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector.svg"
                        />

                        <div className="text-wrapper-34">행복</div>
                      </div>
                    </div>
                  </div>

                  <img
                    className="korean"
                    alt="Korean"
                    src="/img/korean-1.svg"
                  />
                </div>
              </div>

              <div className="post-cate">
                <div className="button-wrapper-2">
                  <button className="button-11">
                    <div className="text-wrapper-33">게시물 간략 소개</div>
                  </button>
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector-2.svg"
                        />

                        <div className="text-wrapper-34">가을</div>
                      </div>
                    </div>
                  </div>

                  <div className="korean-2" />
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector-3.svg"
                        />

                        <div className="text-wrapper-34">한식</div>
                      </div>
                    </div>
                  </div>

                  <div className="korean-3" />
                </div>
              </div>
            </div>
          </div>

          <div className="reading-info">
            <div className="div-4">
              <LinearMessages />
              <div className="r-container">
                <button className="button-10">
                  <div className="text-wrapper-32">상세보기</div>
                </button>

                <div className="user-feeling">
                  <div className="button-wrapper-2">
                    <button className="button-11">
                      <div className="text-wrapper-33">작성자 감정</div>
                    </button>
                  </div>

                  <div className="cate">
                    <div className="image-fill">
                      <div className="image-2">
                        <div className="overlap-group-2">
                          <img
                            className="vector"
                            alt="Vector"
                            src="/img/vector.svg"
                          />

                          <div className="text-wrapper-34">평온</div>
                        </div>
                      </div>
                    </div>

                    <img
                      className="korean"
                      alt="Korean"
                      src="/img/korean.svg"
                    />
                  </div>

                  <div className="cate">
                    <div className="image-fill">
                      <div className="image-2">
                        <div className="overlap-group-2">
                          <img
                            className="vector"
                            alt="Vector"
                            src="/img/vector.svg"
                          />

                          <div className="text-wrapper-34">행복</div>
                        </div>
                      </div>
                    </div>

                    <img
                      className="korean"
                      alt="Korean"
                      src="/img/korean-1.svg"
                    />
                  </div>
                </div>

                <div className="post-cate">
                  <div className="button-wrapper-2">
                    <button className="button-11">
                      <div className="text-wrapper-33">게시물 간략 소개</div>
                    </button>
                  </div>

                  <div className="cate">
                    <div className="image-fill">
                      <div className="image-2">
                        <div className="overlap-group-2">
                          <img
                            className="vector"
                            alt="Vector"
                            src="/img/vector-2.svg"
                          />

                          <div className="text-wrapper-34">가을</div>
                        </div>
                      </div>
                    </div>

                    <div className="korean-2" />
                  </div>

                  <div className="cate">
                    <div className="image-fill">
                      <div className="image-2">
                        <div className="overlap-group-2">
                          <img
                            className="vector"
                            alt="Vector"
                            src="/img/vector-3.svg"
                          />

                          <div className="text-wrapper-34">한식</div>
                        </div>
                      </div>
                    </div>

                    <div className="korean-3" />
                  </div>
                </div>
              </div>
            </div>

            <div className="vertical-border-3">
              <div className="post">
                <div className="frame-wrapper">
                  <div className="frame-15" />
                </div>
              </div>

              <div className="overlap-3">
                <div className="post-info">
                  <div className="frame-16">
                    <div className="background-border-2">
                      <div className="text-wrapper-35">User Badge</div>
                    </div>

                    <div className="background-border-2">
                      <div className="text-wrapper-35">User Badge</div>
                    </div>

                    <div className="background-border-2">
                      <div className="text-wrapper-35">User Badge</div>
                    </div>

                    <div className="background-border-2">
                      <div className="text-wrapper-35">User Badge</div>
                    </div>
                  </div>

                  <div className="user-info">
                    <div className="text-wrapper-36">USER Name</div>

                    <div className="container-5">
                      <div className="container-6">
                        <div className="text-wrapper-37">18</div>

                        <div className="text-wrapper-38">일전 작성</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-wrapper-39">영수증 미인증 게시글</div>

                  <div className="frame-17" />

                  <div className="frame-18">
                    <div className="text-wrapper-40">#가을맛집</div>

                    <div className="text-wrapper-41">#데이트</div>

                    <div className="text-wrapper-42">#전어</div>

                    <div className="text-wrapper-41">#가성비</div>

                    <div className="text-wrapper-43">#웨이팅</div>

                    <div className="text-wrapper-44">#회무침</div>

                    <div className="text-wrapper-45">#사시미</div>
                  </div>

                  <div className="container-7">
                    <button className="button-12">
                      <div className="text-wrapper-46">
                        롯데백화점 부근에 위치
                      </div>
                    </button>
                  </div>
                </div>

                <img className="line" alt="Line" src="/img/line-36.svg" />
              </div>
            </div>
          </div>

          <div className="reading-info-2">
            <div className="div-4">
              <button className="button-10">
                <div className="text-wrapper-32">상세보기</div>
              </button>

              <div className="user-feeling">
                <div className="button-wrapper-2">
                  <button className="button-11">
                    <div className="text-wrapper-33">작성자 감정</div>
                  </button>
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector.svg"
                        />

                        <div className="text-wrapper-34">평온</div>
                      </div>
                    </div>
                  </div>

                  <img className="korean" alt="Korean" src="/img/korean.svg" />
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector.svg"
                        />

                        <div className="text-wrapper-34">행복</div>
                      </div>
                    </div>
                  </div>

                  <img
                    className="korean"
                    alt="Korean"
                    src="/img/korean-1.svg"
                  />
                </div>
              </div>

              <div className="post-cate">
                <div className="button-wrapper-2">
                  <button className="button-11">
                    <div className="text-wrapper-33">게시물 간략 소개</div>
                  </button>
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector-2.svg"
                        />

                        <div className="text-wrapper-34">가을</div>
                      </div>
                    </div>
                  </div>

                  <div className="korean-2" />
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector-3.svg"
                        />

                        <div className="text-wrapper-34">한식</div>
                      </div>
                    </div>
                  </div>

                  <div className="korean-3" />
                </div>
              </div>
            </div>

            <div className="overlap-4">
              <img className="vector-2" alt="Vector" src="/img/vector-4.svg" />

              <div className="vertical-border-3">
                <div className="post">
                  <div className="frame-wrapper">
                    <div className="frame-15" />
                  </div>
                </div>

                <div className="overlap-3">
                  <div className="post-info">
                    <div className="frame-16">
                      <div className="background-border-2">
                        <div className="text-wrapper-35">User Badge</div>
                      </div>

                      <div className="background-border-2">
                        <div className="text-wrapper-35">User Badge</div>
                      </div>

                      <div className="background-border-2">
                        <div className="text-wrapper-35">User Badge</div>
                      </div>

                      <div className="background-border-2">
                        <div className="text-wrapper-35">User Badge</div>
                      </div>
                    </div>

                    <div className="user-info">
                      <div className="text-wrapper-36">USER Name</div>

                      <div className="container-5">
                        <div className="container-6">
                          <div className="text-wrapper-37">18</div>

                          <div className="text-wrapper-38">일전 작성</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-wrapper-47">영수증 인증 게시글</div>

                    <div className="frame-17" />

                    <div className="frame-18">
                      <div className="text-wrapper-40">#가을맛집</div>

                      <div className="text-wrapper-41">#데이트</div>

                      <div className="text-wrapper-42">#전어</div>

                      <div className="text-wrapper-41">#가성비</div>

                      <div className="text-wrapper-43">#웨이팅</div>

                      <div className="text-wrapper-44">#회무침</div>

                      <div className="text-wrapper-45">#사시미</div>
                    </div>

                    <div className="container-7">
                      <button className="button-12">
                        <div className="text-wrapper-46">
                          롯데백화점 부근에 위치
                        </div>
                      </button>
                    </div>
                  </div>

                  <img className="line" alt="Line" src="/img/line-36.svg" />
                </div>
              </div>
            </div>
          </div>

          <div className="reading-info-3">
            <div className="div-4">
              <button className="button-10">
                <div className="text-wrapper-32">상세보기</div>
              </button>

              <div className="user-feeling">
                <div className="button-wrapper-2">
                  <button className="button-11">
                    <div className="text-wrapper-33">작성자 감정</div>
                  </button>
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector.svg"
                        />

                        <div className="text-wrapper-34">평온</div>
                      </div>
                    </div>
                  </div>

                  <img className="korean" alt="Korean" src="/img/korean.svg" />
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector.svg"
                        />

                        <div className="text-wrapper-34">행복</div>
                      </div>
                    </div>
                  </div>

                  <img
                    className="korean"
                    alt="Korean"
                    src="/img/korean-1.svg"
                  />
                </div>
              </div>

              <div className="post-cate">
                <div className="button-wrapper-2">
                  <button className="button-11">
                    <div className="text-wrapper-33">게시물 간략 소개</div>
                  </button>
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector-2.svg"
                        />

                        <div className="text-wrapper-34">가을</div>
                      </div>
                    </div>
                  </div>

                  <div className="korean-2" />
                </div>

                <div className="cate">
                  <div className="image-fill">
                    <div className="image-2">
                      <div className="overlap-group-2">
                        <img
                          className="vector"
                          alt="Vector"
                          src="/img/vector-3.svg"
                        />

                        <div className="text-wrapper-34">한식</div>
                      </div>
                    </div>
                  </div>

                  <div className="korean-3" />
                </div>
              </div>
            </div>

            <div className="overlap-4">
              <img className="vector-2" alt="Vector" src="/img/vector-4.svg" />

              <div className="vertical-border-3">
                <div className="post">
                  <div className="frame-wrapper">
                    <div className="frame-15" />
                  </div>
                </div>

                <div className="overlap-3">
                  <div className="post-info">
                    <div className="frame-16">
                      <div className="background-border-2">
                        <div className="text-wrapper-35">User Badge</div>
                      </div>

                      <div className="background-border-2">
                        <div className="text-wrapper-35">User Badge</div>
                      </div>

                      <div className="background-border-2">
                        <div className="text-wrapper-35">User Badge</div>
                      </div>

                      <div className="background-border-2">
                        <div className="text-wrapper-35">User Badge</div>
                      </div>
                    </div>

                    <div className="user-info">
                      <div className="text-wrapper-36">USER Name</div>

                      <div className="container-5">
                        <div className="container-6">
                          <div className="text-wrapper-37">18</div>

                          <div className="text-wrapper-38">일전 작성</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-wrapper-47">영수증 인증 게시글</div>

                    <div className="frame-17" />

                    <div className="frame-18">
                      <div className="text-wrapper-40">#가을맛집</div>

                      <div className="text-wrapper-41">#데이트</div>

                      <div className="text-wrapper-42">#전어</div>

                      <div className="text-wrapper-41">#가성비</div>

                      <div className="text-wrapper-43">#웨이팅</div>

                      <div className="text-wrapper-44">#회무침</div>

                      <div className="text-wrapper-45">#사시미</div>
                    </div>

                    <div className="container-7">
                      <button className="button-12">
                        <div className="text-wrapper-46">
                          롯데백화점 부근에 위치
                        </div>
                      </button>
                    </div>
                  </div>

                  <img className="line" alt="Line" src="/img/line-36.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav">
          <div className="link-2">
            <div className="text-wrapper-48">1</div>
          </div>

          <div className="link-3">
            <div className="text-wrapper-49">2</div>
          </div>

          <div className="link-4">
            <div className="text-wrapper-49">3</div>
          </div>

          <div className="link-5">
            <div className="text-wrapper-49">4</div>
          </div>

          <div className="link-6">
            <div className="text-wrapper-49">5</div>
          </div>

          <div className="link-7">
            <div className="text-wrapper-49">6</div>
          </div>

          <div className="link-8">
            <div className="text-wrapper-49">7</div>
          </div>

          <div className="link-9">
            <div className="text-wrapper-49">8</div>
          </div>

          <div className="link-10">
            <div className="text-wrapper-49">9</div>
          </div>

          <div className="link-11">
            <div className="text-wrapper-50">10</div>
          </div>

          <img className="link-12" alt="Link" src="/img/link.svg" />
        </div>
      </div>

    </div>
  );
};
