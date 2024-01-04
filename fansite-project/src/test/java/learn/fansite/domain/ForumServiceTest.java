package learn.fansite.domain;

import learn.fansite.data.ForumRepository;
import learn.fansite.models.Forum;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class ForumServiceTest {

    @Autowired
    ForumService service;

    @MockBean
    ForumRepository repository;

    @Test
    void shouldAdd(){
        Forum forum = makeForum();
        Forum mockOut = makeForum();
        mockOut.setForumId(1);

        when(repository.add(forum)).thenReturn(mockOut);

        Result<Forum> actual = service.add(forum);
        assertEquals(ResultType.SUCCESS, actual.getType());
        assertEquals(mockOut, actual.getPayload());
    }

    @Test
    void shouldNotAddNullOrBlankForumName(){
        Forum forum = makeForum();
        forum.setForumName(null);
        Result<Forum> result = service.add(forum);
        assertEquals(ResultType.INVALID, result.getType());

        forum.setForumName(" ");
        result = service.add(forum);
        assertEquals(ResultType.INVALID, result.getType());
    }

    @Test
    void shouldNotAddNullOrBlankTitle(){
        Forum forum = makeForum();
        forum.setTitle(null);
        Result<Forum> result = service.add(forum);
        assertEquals(ResultType.INVALID, result.getType());

        forum.setTitle(" ");
        result = service.add(forum);
        assertEquals(ResultType.INVALID, result.getType());
    }

    @Test
    void shouldNotAddNullOrBlankPostContent(){
        Forum forum = makeForum();
        forum.setPostContent(null);
        Result<Forum> result = service.add(forum);
        assertEquals(ResultType.INVALID, result.getType());

        forum.setPostContent(" ");
        result = service.add(forum);
        assertEquals(ResultType.INVALID, result.getType());
    }

    @Test
    void shouldNotAddNullOrBlankPostDate(){
        Forum forum = makeForum();
        forum.setPostDate(null);
        Result<Forum> result = service.add(forum);
        assertEquals(ResultType.INVALID, result.getType());
    }

    @Test
    void shouldUpdate(){
        Forum forum = makeForum();
        forum.setForumId(1);

        when(repository.update(forum)).thenReturn(true);

        Result<Forum> actual = service.update(forum);
        assertEquals(ResultType.SUCCESS, actual.getType());

    }

    @Test
    void shouldNotUpdateNullOrBlankForumName(){
        Forum forum = makeForum();
        forum.setForumId(1);
        forum.setForumName(null);
        Result<Forum> result = service.update(forum);
        assertEquals(ResultType.INVALID, result.getType());

        forum.setForumName(" ");
        result = service.update(forum);
        assertEquals(ResultType.INVALID, result.getType());
    }

    @Test
    void shouldNotUpdateNullOrBlankTitle(){
        Forum forum = makeForum();
        forum.setForumId(1);
        forum.setTitle(null);
        Result<Forum> result = service.update(forum);
        assertEquals(ResultType.INVALID, result.getType());

        forum.setTitle(" ");
        result = service.update(forum);
        assertEquals(ResultType.INVALID, result.getType());
    }

    @Test
    void shouldNotUpdateNullOrBlankPostContent(){
        Forum forum = makeForum();
        forum.setForumId(1);
        forum.setPostContent(null);
        Result<Forum> result = service.update(forum);
        assertEquals(ResultType.INVALID, result.getType());

        forum.setPostContent(" ");
        result = service.update(forum);
        assertEquals(ResultType.INVALID, result.getType());
    }

    @Test
    void shouldNotUpdateNullPostDate(){
        Forum forum = makeForum();
        forum.setForumId(1);
        forum.setPostDate(null);
        Result<Forum> result = service.update(forum);
        assertEquals(ResultType.INVALID, result.getType());
    }

    Forum makeForum(){
        Forum forum = new Forum();
        forum.setForumName("name99");
        forum.setTitle("title99");
        forum.setPostContent("post-content-99");
        forum.setPostDate(LocalDate.now());

        return forum;
    }

}