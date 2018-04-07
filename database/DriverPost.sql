# User Information Database
# Sam Bennetts
# 7 April 2018


DROP TABLE IF EXISTS DriverPost;

CREATE TABLE IF NOT EXISTS DriverPost (
  PostingID       INT           NOT NULL AUTO_INCREMENT,
  DestinationID   INT           NOT NULL,
  DriverID        INT           NOT NULL,
  RideDate        DATETIME      NOT NULL,
  LeaveTime       DATETIME      NOT NULL,
  ReturnTime      DATETIME      NOT NULL,
  NumberSpots     INT           NOT NULL,
  LeaveLocation   VARCHAR(45)   NULL,
  DesiredGasMoney DECIMAL(5,2)  NULL,
  Rider1ID        INT           NULL,
  Rider2ID        INT           NULL,
  Rider3ID        INT           NULL,
  Rider4ID        INT           NULL,
  Rider5ID        INT           NULL,
  PRIMARY KEY (PostingID)
)

AUTO_INCREMENT = 500;

